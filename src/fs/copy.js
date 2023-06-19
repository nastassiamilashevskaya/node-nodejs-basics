import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that copies folder files files with all its content into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation 
// failed must be thrown)
const copy = async () => {
  const directoryPath = path.join(__dirname, 'files');
  const copiedDirectoryPath = path.join(__dirname, 'files_copy');

  fs.access(copiedDirectoryPath, error => {
    if (error) {
      fs.cp(directoryPath, copiedDirectoryPath, { recursive: true }, err => {
        if (err) {
          throw new Error('FS operation failed')
        }
      });
    } else {
      throw new Error('FS operation failed')
    }
  })

};

await copy();
