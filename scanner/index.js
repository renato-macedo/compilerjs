const lexems = require('./lexems');

module.exports = function(input) {
  let currentPosition = 0;
  let programTokens = [];
  let valueAccumulator = '';
  let previousClass = '';
  foundToken = false;
  while (currentPosition < input.length) {
    let currentChar = input[currentPosition];

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
        } else if (lexem.class === 'number' && previousClass === 'number') {
          programTokens[programTokens.length - 1].value += currentChar;
          previousClass = 'number';
        } else if (
          lexem.class === 'assignment' &&
          previousClass === 'assignment'
        ) {
          programTokens[programTokens.length - 1].class = 'comparadores';
          programTokens[programTokens.length - 1].value += currentChar;
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
  return programTokens.filter(token => token.class !== 'whitespace');
};
