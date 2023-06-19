import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
const compress = async () => {
  const fileToCompressPath = path.join(__dirname, 'files/fileToCompress.txt');
  const archieveFilePath = path.join(__dirname, 'files/archive.gz');

  const inputFile = fs.createReadStream(fileToCompressPath);
  const outputFile = fs.createWriteStream(archieveFilePath);

  inputFile.pipe(zlib.createGzip()).pipe(outputFile);
};

await compress();