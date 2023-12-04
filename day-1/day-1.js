const fs = require('fs');

// read lines of input text in to array
const input = fs.readFileSync('day-1/input.txt', 'utf8').split('\n');

const numberWordMap = new Map([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
])

const numbers = input.map((line) => {

    // Find all matches using lookahead
    const matches = Array.from(
        line.matchAll(/(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))/g),
        // First match with a lookahead is the void before the target string, so take the second match
        match => match[1],
    );

    const firstMatch = isNaN(Number(matches[0]))
        ? numberWordMap.get(matches[0])
        : matches[0];

    const lastMatch = isNaN(Number(matches[matches.length - 1]))
        ? numberWordMap.get(matches[matches.length - 1])
        : matches[matches.length - 1];

    const firstAndLastNumber = firstMatch + lastMatch;
    
    if (firstAndLastNumber.length !== 2) {
        throw new Error('First and last numbers should be length 2');
    }

    return parseInt(firstAndLastNumber);
});

const total = numbers.reduce((sum, number, index) => {
    console.log(index);
    return sum + number;
});

console.log(total);
