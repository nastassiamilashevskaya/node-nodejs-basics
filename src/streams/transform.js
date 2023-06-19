// function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);

};

await transform();