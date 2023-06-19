// function that parses command line arguments (given in format --propName value --prop2Name value2, 
// you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
const parseArgs = () => {
  const keyValueArray = [];

  for (let i = 2; i < process.argv.length - 1; i++) {
    keyValueArray.push(`${process.argv[i]} is ${process.argv[++i]}`)
  }

  console.log(keyValueArray.join(', '))
};

parseArgs();