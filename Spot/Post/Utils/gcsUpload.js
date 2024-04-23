import { Storage } from '@google-cloud/storage';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = new Storage({
    keyFilename: path.join(__dirname, 'meta-notch-421121-f9e6a92ec1c8.json')
});
const bucket = storage.bucket('spot_social_posts');

export const uploadImageToStorage = (file) => new Promise((resolve, reject) => {
    if (!file) {
        reject('No image file');
        return;
    }
    
    const newFileName = `${Date.now()}_${file.originalname}`;
    const fileUpload = bucket.file(newFileName);

    const blobStream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype
        }
    });

    blobStream.on('error', (error) => {
        console.error('Upload error:', error);
        reject('Something is wrong! Unable to upload at the moment.');
    });

    blobStream.on('finish', () => {
        const url = `https://storage.cloud.google.com/${bucket.name}/${fileUpload.name}`; // Get public URL
        resolve(url);
    });

    blobStream.end(file.buffer);
});
