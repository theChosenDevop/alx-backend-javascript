// reads stabdard input
const displayMessage = require('./0-console');

const msg = 'Welcome to Holberton School, what is your name?';

const endMsg = 'This important software is now closing';

displayMessage(msg);

process.stdin.setEncoding('utf8');
if (process.stdin.isTTY) {
  process.stdin.on('readable', () => {
    const userInput = process.stdin.read();
    if (userInput !== null) {
      const input = userInput.trim();
      displayMessage(`Your name is: ${input}`);
      displayMessage(endMsg);
      process.stdin.end();
    }
  });
} else {
  let input = '';
  process.stdin.on('data', (data) => {
    input += data;
  });
  process.stdin.on('end', (end) => {
    input = input.trim();
    displayMessage(`Your name is: ${input}`);
    displayMessage(endMsg);
  });
}
