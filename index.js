const fs = require('fs');
const path = require('path');

const scanner = require('./scanner');
const parser = require('./parser');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'));

const tokens = scanner(input.toString());

fs.writeFileSync('scanner_output.json', JSON.stringify(tokens, null, 2));
console.log(tokens);

// const productions = parser(
//   tokens.filter(token => token.class !== 'whitespace').map(token => token.class)
// );
const productions = parser(tokens);

fs.writeFile('parser_output.txt', JSON.stringify(productions, null, 2), err => {
  if (err) {
    console.log(err);
  }
});
