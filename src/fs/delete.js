import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that deletes file fileToRemove.txt 
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
const remove = async () => {
  const filenamePath = path.join(__dirname, 'files/fileToRemove.txt');

  fs.unlink(filenamePath, err => {
    if (err) {
      throw new Error('FS operation failed')
    }
  });

};

await remove();