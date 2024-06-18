const displayMessage = (string) => {
	process.stdout.write(`${string}\n`)
}


if (!process.stdin.isTTY) {
	let input = '';
	process.stdin.on('data', chunk => {
		input += chunk;
	})
	process.stdin.on('end', () => {
		displayMessage(input.trim())
	})
} else {
	const readline = require('readline');
	const r1 = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})

	r1.question('Please enter a message: ', (answer) => {
		displayMessage(answer);
		r1.close();
	})
}
