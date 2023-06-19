import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function that decompresses archive.gz back to the fileToCompress.txt with same content 
// as before compression using zlib and Streams API
const decompress = async () => {
  const fileToDecompressPath = path.join(__dirname, 'files/archive.gz');
  const decompressedFilePath = path.join(__dirname, 'files/fileToCompress.txt');

  const inputFile = fs.createReadStream(fileToDecompressPath);
  const outputFile = fs.createWriteStream(decompressedFilePath);

  inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
};

await decompress();