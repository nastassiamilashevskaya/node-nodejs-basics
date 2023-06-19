import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing 
// these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout

const spawnChildProcess = async (args) => {
  const filePath = path.join(__dirname, 'files/script.js');

  const childProcess = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2]);
