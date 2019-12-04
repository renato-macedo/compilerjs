const parserTable = require('./table.json');
const AST = {
  type: 'Program',
  body: []
};
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

// function parser(tokens) {
//   tokens.push({ class: '$', value: '' });
//   const stack = ['C'];
//   const AST = {};
//   AST['C'] = {};
//   let token, read, state;
//   let lastExp, lastState;
//   let buffer = [];

//   while (stack.length) {
//     state = stack.shift();
//     if (!read) {
//       token = tokens.shift();
//       buffer.push(token);
//       read = token.class;
//     }

//     if (state === read) {
//       read = null;
//       continue;
//     }

//     const hm = parserTable[state][read];
//     if (!hm) {
//       throw new SyntaxError(`Tentou ler ${state} mas encontrou ${read}`);
//     }

//     const production = [...hm];
//     // AST[state] = production;
//     // token.production = production;
//     if (!lastExp) {
//       // iniciando o programa C

//       AST[state] = {};
//       AST[state].production = production;
//       //AST[state].production = buffer;
//       //AST[state].token = token;

//       lastExp = AST[state];
//       //lastExp
//     } else {
//       //index = lastExp.production.indexOf(state);
//       index = lastExp.production.findIndex(
//         (token, index) => token.class === state
//       );
//       aux = {};
//       aux[state] = {};
//       //aux[state].production = production;
//       aux[state].production = buffer;
//       //aux[state].token = token;
//       lastExp.production[index] = aux;
//       lastExp = lastExp.production[index][state];
//     }

//     console.log(JSON.stringify(AST, null, 2));
//     if (production[0] === 'ɛ') {
//       // console.log({production});
//       continue;
//     }
//     stack.shift();
//     stack.push(...production);
//   }
//   return AST;
// }

function parser(tokens) {
  tokens.push({ class: '$', value: '' });
  const token = tokens.shift();

  return parse('C', tokens, token);
}

function parse(state, tokens, token) {
  const AST = {};
  AST[state] = {};
  AST[state].productions = [];
  let read = token.class;
  const queue = [...parserTable[state][read]];
  let element = queue.shift();
  do {
    // o elemento é uma expressão ou um terminal
    if (element.exp) {
      // se for uma expressao precisamos realizar o parse com aquele estado
      const auxTree = parse(element.value, tokens, token);
      AST[state].productions.push(auxTree);

      // se nao for uma expressao, é um terminal entao precisamos verificar se é valido para aquela pilha
    } else if (element.value === read) {
      // se for válido precisamos adicionar na arvore
      AST[state].productions.push(token);
      // depois de adicionar na arvore podemos ler o proximo item da fila
      if (queue[0].exp) {
        element = queue[0];
        token = tokens.shift();
        continue;
      }
      element = queue.shift();

      //tokens.shift();
      token = tokens.shift();
      read = token.class;
    } else {
      throw new SyntaxError(
        `Tentou ler ${element.value} mas encontrou ${read}`
      );
    }
  } while (queue.length);
  console.log(JSON.stringify(AST, null, 2));
  return AST;
}

module.exports = parser;
