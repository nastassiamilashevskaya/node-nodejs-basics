// function that parses environment variables with prefix RSS_ and prints them to the console 
// in the format RSS_name1=value1; RSS_name2=value2
const parseEnv = () => {
  const keys = Object.keys(process.env).filter(key => key.startsWith('RSS_'))
  const keyValueArray = [];

  keys.forEach(key => {
    keyValueArray.push(`${key}=${process.env[key]}`)
  })

  console.log(keyValueArray.join(', '))
};

parseEnv();