const parserTable = require('./table');

// function parser(values) {
//   // Sentence é o input do programa
//   const sentence = [...values, '$'].reverse();
//   // console.log(sentence);

//   // A stack é o que eu preciso ler para estar dentro da gramatica,
//   // por inicia com C que representa o programa inteiro
//   const stack = ['C'];
//   const productions = [];

//   let read, state;

//   while (stack.length) {
//     state = stack.pop();

//     if (!read) read = sentence.pop();

//     if (state === read) {
//       read = null;
//       continue;
//     }
//     const hm = parserTable[state][read];
//     //console.log({hm})

//     if (!hm) {
//       console.error(`Tentou ler ${state} mas encontrou ${read}`);
//     }

//     const production = [...hm];

//     productions.push([state, '→', ...production].join(' '));

//     if (production[0] === 'ɛ') {
//       // console.log({production});
//       continue;
//     }
//     // const terminal = production[0];
//     // if (terminal.length === 0) continue;

//     stack.push(...production.reverse());
//     //console.log({ stack });
//   }
//   // console.log(productions)

//   return productions;
// }

function parser(tokens) {
  tokens.push({ class: '$', value: '' });
  const stack = ['C'];
  const AST = {};
  AST['C'] = {};
  let token, read, state;
  let lastExp, lastState;

  while (stack.length) {
    state = stack.shift();

    if (!read) {
      token = tokens.shift();
      read = token.class;
    }

    if (state === read) {
      read = null;
      continue;
    }

    const hm = parserTable[state][read];
    if (!hm) {
      throw new SyntaxError(`Tentou ler ${state} mas encontrou ${read}`);
    }

    const production = [...hm];
    // AST[state] = production;
    token.production = production;
    if (!lastExp) {
      // iniciando o programa C

      AST[state] = {};
      AST[state].production = production;
      //AST[state][production[0]] = { production };
      //lastExp = {};
      lastExp = AST[state];
      lastState = state;
      //lastExp
    } else {
      index = lastExp.production.indexOf(state);
      aux = {};
      aux[state] = {};
      aux[state].production = production;
      lastState = state;
      lastExp.production[index] = aux;
      lastExp = lastExp.production[index][state];
    }

    console.log({ AST });
    if (production[0] === 'ɛ') {
      // console.log({production});
      continue;
    }
    stack.shift();
    stack.push(...production);
  }
  return AST;
}

module.exports = parser;
