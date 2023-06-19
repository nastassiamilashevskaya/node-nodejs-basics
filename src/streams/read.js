import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
const read = async () => {
  const filePath = path.join(__dirname, 'files/fileToRead.txt');

  const readableStream = fs.createReadStream(filePath, 'utf8');

  readableStream.on('error', function (error) {
    process.stdout.write(error.message + '\n');
  })

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  })
};

await read();