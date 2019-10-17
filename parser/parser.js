const tokens = require('../output.json');
const ast = {
  type: 'Program',
  body: []
};
function Parser(tokens) {
  let current = 0;
  function parse() {
    parseDef();
  }
  function parseDef() {
    //const firstToken = tokens.shift();
    while (tokens.length !== 0) {
      const expr = parseExp();
      if (expr) {
        ast.body.push(expr);
      }
    }
    // consume('type');
    // const name = consume('Id').value;
    // const params = parseParams();
    // const body = parseExp();
    // consume('whitepace');
    // const Node = {
    //   name,
    //   params,
    //   body
    // };
  }

  function consume(expected_type) {
    if (expected_type) {
      const currentToken = tokens.shift();
      console.log(currentToken);
      if (currentToken.class === expected_type) {
        return currentToken;
      }
      throw new Error(
        `Expected class ${expected_type} but got ${currentToken.class}`
      );
    } else {
      tokens.shift();
    }
  }

  function consumeUntil(expected_type) {
    let currentToken = tokens.shift();
    while (currentToken.class !== expected_type) {
      currentToken = tokens.shift();
      console.log('AA', currentToken.class);
    }
    return currentToken;
  }
  function consumeUntilNotBe(expected_type) {
    let currentToken = tokens.shift();
    while (currentToken.class === expected_type) {
      currentToken = tokens.shift();
      console.log('AA', currentToken.class);
    }
    return currentToken;
  }

  function parseExp() {
    let expr;
    const next = seeNext();
    console.log(next);
    switch (next) {
      case 'type':
        expr = parseType();
        break;
      case 'Id':
        expr = parseVar();
        break;
      case 'if':
        parseIf();
        break;
      case 'while':
        parseLoop();
        break;
      case 'funcao':
        expr = parseFunc();
        break;

      default:
        consume();
        break;
    }
    console.log(expr);
    return expr;
  }

  function parseParams() {
    const params = [];
    consume('parentese');
    while (seeNext() !== 'parentese') {
      const type = consumeUntil('type').value;
      const name = consumeUntil('Id').value;
      params.push({ type, name });
    }
    consume('parentese');
    return params;
  }

  function parseBody() {
    const exprs = [];
    consumeUntil('chave');
    while (seeNext() !== 'chave') {
      const exp = parseExp();
      exprs.push(exp);
    }
    consume('chave');
    return exprs;
  }

  function parseType() {
    const type = consume('type').value;
    //const id = consumeUntil('Id').value;
    //consumeUntilNotBe('whitespace')
    let next = seeNext()
    while(next != 'Id') {
      consume()
      next = seeNext()
    }
    //tokens[0]
   
    const Node = {
      name: 'VariableDeclaration',
      type: type,
      value: tokens[0].value
    };
    
    return Node;
  }
  function parseVar() {
    let node;
    
    //const currentToken = consume('Id')
    const currentToken = consumeUntil('Id');
    //const next = seeNext();
    //consumeUntil('Id')
    const next = seeNext()
    console.log(next)

    while(next !== 'end' && next !== 'assigment') {
      consume()
    }
    switch ('aa',next) {
      case 'end':
        consume('end')
        node = currentToken
        break;
      case 'assignment':
        consume('assignment')
        let expr = parseExp()
        node = {
          name: 'Assignment',
          value: expr
        }
        break;
      // case 'parentese':
      //   consume()
      //   break;
      // default:
      //   consume()
      //   break;
    }
    // const Node = {
    //   type: 'VariableDeclaration'
    // };
    return node
  }
  function parseIf() {
    const currentToken = consume('if');
    const Node = {
      type: 'IfStatm'
    };
  }
  function parseLoop() {
    const currentToken = consume('while');
    const Node = {
      type: 'Loop'
    };
  }
  function parseFunc() {
    const currentToken = consume('funcao');
    const id = consumeUntil('Id').value;
    const args = parseParams();
    const body = parseBody();

    const Node = {
      type: 'FunctionDeclaration',
      name: id,
      args,
      body
    };
    return Node;
  }

  function parseFuncCall() {
    const currentToken = consume('Id');

    const Node = {
      type: 'FunctionCall'
    };
  }

  function parseNull() {
    consume();
  }

  function seeNext() {
    return tokens[0].class;
  }

  parse();
}

Parser(tokens);
console.log(JSON.stringify(ast.body, null, 2));
