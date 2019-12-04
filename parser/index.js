const parserTable = require('./table.json');

const AST = {
  type: 'Program',
  body: []
};

function parser(tokens) {
  tokens.push({ class: '$', value: '' });
  
  let state = 'C';
  while(tokens.length) {
    let token = tokens.shift();
    let read = token.class;

    let queue = [...parserTable[state][read]]
    let element = queue.shift()
    if (element.exp) {
      parseExp(element.value, token, tokens)
    }
  }
}

function parseExp(state, startToken, tokens) {
  
  while(tokens.length) {
    let queue = [...parserTable[state][startToken.class]]
    let element = queue.shift()
    if (element.exp) {

    } else {
      if
    }
  }
}

function parseFunc(tokens) {
  const queue = parserTable['Z']['fn'];
  while(queue.length)
}

module.exports = parser;
