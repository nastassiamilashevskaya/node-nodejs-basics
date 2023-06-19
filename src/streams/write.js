import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
const write = async () => {
  const writableFilePath = path.join(__dirname, 'files/fileToWrite.txt');

  const writableStream = fs.createWriteStream(writableFilePath);

  process.stdin.on('data', data => {
    writableStream.write(data);
  });
};

await write();