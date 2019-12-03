const parserTable = require('./table');

class Node {
  constructor(value, parent = null) {
    this.parent = parent;
    this.value = value;
    this.childs = [];
    this.visited = false;
  }
}

function parser(values) {
  // Sentence é o input do programa
  const sentence = [...values, '$'].reverse();
  // console.log(sentence);

  // A stack é o que eu preciso ler para estar dentro da gramatica,
  // por inicia com C que representa o programa inteiro
  const stack = ['C'];
  const productions = [];
  const parseTree = new Node('C');
  let read, state;
  let currentNode = parseTree;

  while (stack.length) {
    state = stack.pop();
    currentNode.visited = true;

    if (!read) read = sentence.pop();

    if (state === read) {
      let nextNode = null;

      while (!nextNode) {
        if (currentNode.parent) {
          currentNode = currentNode.parent;
          console.log({ currentNode });
          nextNode = currentNode.childs.find(c => !c.visited);
          // console.log({ nextNode });
        } else break;
      }

      currentNode = nextNode;
      read = null;

      continue;
    }
    const hm = parserTable[state][read];
    //console.log({hm})

    if (!hm) {
      console.error(`Tentou ler ${state} mas encontrou ${read}`);
    }

    const production = [...hm];

    production.forEach(p => currentNode.childs.push(new Node(p, currentNode)));
    currentNode = currentNode.childs[0];

    productions.push([state, '→', ...production].join(' '));

    if (production[0] === 'ɛ') {
      // console.log({production});
      continue;
    }
    // const terminal = production[0];
    // if (terminal.length === 0) continue;

    stack.push(...production.reverse());
    //console.log({ stack });
  }
  // console.log(productions)

  return [parseTree, productions];
}

// function parser(tokens) {
//   tokens.push({ class: '$', value: '' });
//   const stack = ['C'];
//   const productions = {};
//   let read, state;

//   while (stack.length) {
//     state = stack.pop();
//     let token = tokens.shift();
//     read = token.class;
//     if (state === read) {
//       read = null;
//       continue;
//     }

//     const hm = parserTable[state][read];
//     if (!hm) {
//       console.error(`Tentou ler ${state} mas encontrou ${read}`);
//     }

//     const production = [...hm];
//     productions[state] = production;

//     if (production[0] === 'ɛ') {
//       // console.log({production});
//       continue;
//     }

//     stack.push(...production);
//   }
// }

// function checkStack(stack) {
//   while (stack.length) {}
// }

module.exports = parser;
