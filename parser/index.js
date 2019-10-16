const { typeHandler } = require('./Handlers');

const tokens = require('../output.json');
function parser(tokens) {
  let current = 0;
  function walk() {
    let currentToken = tokens[current];
    console.log(currentToken);
    let node;
    switch (currentToken.class) {
      case 'type':
        //currentToken = tokens[++current];
        node = {
          type: 'DeclarationExpression',
          name: currentToken.value,
          body: []
        };
        currentToken = tokens[++current];
        while (currentToken.class !== 'end') {
          node.body.push(walk());
          console.log(currentToken);
          currentToken = tokens[current];
        }
        current++;
        break;

      case 'number':
        current++;

        node = {
          type: currentToken.class,
          value: currentToken.value
        };
        break;
      case 'string':
        current++;
        node = {
          type: currentToken.class,
          value: currentToken.value
        };
        break;

      // case 'while':
      //   break;
      case 'funcao':
        node = {
          type: 'FunctionDeclaration',
          name: currentToken.value,
          body: []
        };
        console.log('AA', currentToken);
        currentToken = tokens[++current];
        console.log('BB', currentToken);
        while (currentToken.class !== 'abre_chave') {
          node.body.push(walk());
          currentToken = tokens[current];
        }
        current++; // We dont need ')'
        break;
      case 'abre_parentese':
        node = {
          type: 'FunctionArgs',
          name: tokens[current - 1].value,
          body: []
        };
        currentToken = tokens[++current];

        while (currentToken.class !== 'fecha_parentese') {
          node.body.push(walk());
          currentToken = tokens[current];
        }
        current++;
        break;
      // case 'fecha_parentese':
      //   break;
      case 'abre_chave':
        node = {
          type: 'ScopeDeclaration',
          name: tokens[current - 1].value,
          body: []
        };
        currentToken = tokens[++current];

        while (currentToken.class !== 'fecha_chave') {
          node.body.push(walk());
          currentToken = tokens[current];
        }
        current++;
        break;
      case 'fecha_chave':
        current++;
        break;
      // case 'true-false':
      //   break;
      case 'Id':
        console.log('Id', currentToken);
        node = {
          type: currentToken.class,
          value: currentToken.value
        };

        current++;
        break;
      // case 'assignment':
      //   break;
      // case 'end':
      //   break;
      case 'whitespace':
        node = {
          type: currentToken.class,
          value: currentToken.value
        };
        current++;
        break;
      // case 'op_mat':
      //   break;
      // case 'op_Logico':
      //   break;

      // case 'comparadores':
      //   break;
      // case 'return':
      //   break;

      default:
        current++;
        break;
    }
    return node;
  }

  let ast = {
    type: 'Program',
    body: []
  };

  while (current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}

const ast = parser(tokens);
ast.body = ast.body.filter(node => {
  if (node && node.body) {
    node.body = node.body.filter(n => n.type !== 'whitespace');
  }
  if (node && node.type !== 'whitespace') {
    return true;
  }
  return false;
});
//console.log(ast.body);
console.log(JSON.stringify(ast.body));
