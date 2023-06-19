import { createHash } from 'node:crypto'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
const calculateHash = async () => {
  const filenamePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

  fs.readFile(filenamePath, "utf8", (err, content) => {
    if (err) {
      throw new Error('FS operation failed')
    }

    console.log(createHash('sha256').update(content).digest('hex'))
  });
};

await calculateHash();