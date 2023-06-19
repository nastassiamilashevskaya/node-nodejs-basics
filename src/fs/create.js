import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that creates new file fresh.txt with content I am fresh and young inside of the files 
// folder (if file already exists Error with message FS operation failed must be thrown)
const create = async () => {
  const filePath = path.join(__dirname, 'files/fresh.txt');

  fs.access(filePath, error => {
    if (error) {
      fs.writeFile(filePath, 'I am fresh and young', err => {
        if (err) {
          throw new Error('FS operation failed')
        }
      });
    } else {
      throw new Error('FS operation failed')
    }
  })

};

await create();