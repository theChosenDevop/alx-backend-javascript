// script uses child process to read from commandline
const msg = ['Welcome to Holberton School, what is your name?'];

const endMsg = 'This important software is now closing';

// Creates an instance of the child_process
const { spawn } = require('child_process');

const output = spawn('echo', msg);

// write  to stdout output
output.stdout.on('data', (data) => {
  process.stdout.write(data);

  // set standard input to readable format string
  process.stdin.setEncoding('utf-8');

  // output user input
  process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name}`);
  });

  // close with an end message through pipe (non-interactive)
  process.stdin.on('end', () => {
    process.stdout.write(`${endMsg}\n`);
  });
});
