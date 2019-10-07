const fs = require('fs');
const path = require('path');

const tokens = require('./tokens');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'));
const inputString = input.toString();
let currentPosition = 0;
console.log(inputString.length);
let programTokens = [];
let valueAccumulator = '';

foundToken = false;
while (currentPosition < inputString.length) {
  let currentChar = inputString[currentPosition];

  if (foundToken) {
    valueAccumulator = '';
    foundToken = false;
  }

  valueAccumulator += currentChar;
  for (let token of tokens) {
    let pattern = token.pattern;
    if (pattern.test(valueAccumulator)) {
      // console.log(valueAccumulator);
      programTokens.push({ class: token.class, value: valueAccumulator });
      foundToken = true;
      previousClass = token.class;
      break;
    }
  }

  currentPosition++;
}

console.log(programTokens);
