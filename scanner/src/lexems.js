const Lexems = [
  {
    pattern: /^while/,
    class: 'while',
  },
  {
    pattern: /^fn/,
    class: 'funcao',
  },
  {
    pattern: /^\(/,
    class: 'abre_parentese',
  },
  {
    pattern: /^\)/,
    class: 'fecha_parentese',
  },
  {
    pattern: /^{/,
    class: 'abre_chave',
  },
  {
    pattern: /^}/,
    class: 'fecha_chave',
  },
  {
    pattern: /^\d*\.?\d+/,
    class: 'number',
  },
  {
    pattern: /^int$|^float$|^string$|^boolean$|^void$/,
    class: 'type',
  },
  {
    pattern: /^(true|false)/,
    class: 'true-false',
  },
  {
    //pattern: /^\$[a-zA-Z]+\s$/,
    pattern: /^\$[_a-zA-Z]\w*/,
    class: 'Id',
  },

  {
    pattern: /^=/,
    class: 'assignment',
  },
  {
    pattern: /^;/,
    class: 'end',
  },
  {
    pattern: /^\s$/,
    class: 'whitespace',
  },
  {
    pattern: /^[\+|\-|\*|\/]/,
    class: 'op_mat',
  },
  {
    pattern: /^&&|\^{1}|^and{1}|\|\|{1}|v{1}/,
    class: 'op_Logico',
  },
  {
    pattern: /^".*"$/,
    class: 'string',
  },
  {
    pattern: /^(==|>|>=|<|<=|=!)/,
    class: 'comparadores',
  },

  {
    pattern: /^return/,
    class: 'return',
  },
];
const consta = 1;
console.log(consta);
module.exports = Lexems;
