const fs = require('fs');
const path = require('path');

const lexems = require('./lexems');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'));
const inputString = input.toString();
let currentPosition = 0;
console.log(inputString.length);
let programTokens = [];
let valueAccumulator = '';
let previousClass = '';
foundToken = false;
while (currentPosition < inputString.length) {
  let currentChar = inputString[currentPosition];

  if (foundToken) {
    valueAccumulator = '';
    foundToken = false;
  }

  valueAccumulator += currentChar;
  for (let lexem of lexems) {
    let pattern = lexem.pattern;
    if (pattern.test(valueAccumulator)) {
      // console.log(valueAccumulator);
      if (lexem.class === 'number' && previousClass === 'Id') {
        programTokens[programTokens.length - 1].value += currentChar;
        previousClass = 'Id';
      } else {
        programTokens.push({ class: lexem.class, value: valueAccumulator });
        previousClass = lexem.class;
      }
      foundToken = true;
      break;
    }
  }
  if (!foundToken && previousClass === 'Id') {
    programTokens[programTokens.length - 1].value += currentChar;
    foundToken = true;
  }

  currentPosition++;
}

console.log(programTokens);
