import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that prints all array of filenames from files folder into console 
// (if files folder doesn't exists Error with message FS operation failed must be thrown)
const list = async () => {
  const directoryPath = path.join(__dirname, 'files');

  fs.readdir(directoryPath, function (error, files) {
    if (error) {
      throw new Error('FS operation failed')
    }

    const filenamesArray = [];

    files.forEach(function (file) {
      filenamesArray.push(file)
    });

    console.log('Array of filenames', filenamesArray);
  });

};

await list();