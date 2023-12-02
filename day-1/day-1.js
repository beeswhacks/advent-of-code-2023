const fs = require('fs');

// read lines of input text in to array
const input = fs.readFileSync('day-1/input.txt', 'utf8').split('\n');

// filter out non-numeric characters
const numbers = input.map((line) => {
    const numbersOnly = line.replace(/\D/g, '')

    // If only 1 number, concatenate string with itself. Otherwise take first and last number.
    const firstAndLastNumber = numbersOnly.length === 1
        ? numbersOnly + numbersOnly
        : numbersOnly[0] + numbersOnly[numbersOnly.length - 1];

    if (firstAndLastNumber.length !== 2) {
        throw new Error('First and last numbers should be length 2');
    }

    return parseInt(firstAndLastNumber);
});

const total = numbers.reduce((sum, number) => sum + number);

console.log(total);
