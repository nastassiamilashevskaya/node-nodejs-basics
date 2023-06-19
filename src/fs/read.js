import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that prints content of the fileToRead.txt into console 
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
const read = async () => {
  const filenamePath = path.join(__dirname, 'files/fileToRead.txt');

  fs.readFile(filenamePath, "utf8", (err, contents) => {
    if (err) {
      throw new Error('FS operation failed')
    }

    console.log(contents);
  });
};

await read();