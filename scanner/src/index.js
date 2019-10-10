const fs = require('fs');
const path = require('path');
const options = require('commander');
try {
  options
    .version('0.0.1')
    .option(
      '-s --source <file_path>',
      'Receives path of source code to compile.'
    )
    .parse(process.argv);
  const lexems = require('./lexems');
  const input = fs.readFileSync(options.source);

  const inputString = input.toString();
  let currentPosition = 0;
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

  fs.writeFileSync('output.json', JSON.stringify(programTokens));
  console.log(programTokens);
} catch (error) {
  console.log(error.message);
}
