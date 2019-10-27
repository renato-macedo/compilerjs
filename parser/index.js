const parseTable = require('./table');

function parser(values) {
  // console.log(values);
  const sentence = [...values, '$'].reverse();
  console.log(sentence);
  const stack = ['EXP'];
  const productions = [];
  let read, state;

  while (stack.length) {
    state = stack.pop();
    if (!read) read = sentence.pop();

    if (state === read) {
      read = null;
      continue;
    }
    const hm = parseTable[state][read];

    if (!hm) {
      console.log(productions);
      console.log(sentence);
    }

    const production = [...hm];
    productions.push([state, '→', ...production].join(' '));

    if (production[0] === 'ɛ') continue;
    // const terminal = production[0];
    // if (terminal.length === 0) continue;

    stack.push(...production.reverse());
  }

  return productions;
}

module.exports = parser;
