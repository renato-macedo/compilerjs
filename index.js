const fs = require('fs');
const path = require('path');
//const options = require('commander');
const scanner = require('./scanner');
const parser = require('./parser');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'));

const tokens = scanner(input.toString());

fs.writeFileSync('scanner_output.json', JSON.stringify(tokens, null, 2));
console.log(tokens);

const productions = parser(
  tokens.filter(token => token.class !== 'whitespace').map(token => token.class)
);
console.log(productions);
fs.writeFileSync('parser_output.txt', JSON.stringify(tokens, null, 2));

/* int $idade;

$idade = 13;

fn $soma(int $a, int $b) {
  return $a + $b;
}

while ($idade < 18) {
  $idade = $soma($idade, 2);
}
 */
