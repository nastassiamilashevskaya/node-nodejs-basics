import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that renames file wrongFilename.txt to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with 
// message FS operation failed must be thrown)
const rename = async () => {
  const oldFilenamePath = path.join(__dirname, 'files/wrongFilename.txt');
  const newFilenamePath = path.join(__dirname, 'files/properFilename.md');

  fs.access(newFilenamePath, error => {
    if (error) {
      fs.rename(oldFilenamePath, newFilenamePath, err => {
        if (err) {
          throw new Error('FS operation failed')
        }
      });
    } else {
      throw new Error('FS operation failed')
    }
  })

};

await rename();