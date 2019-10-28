const Lexems = [
  {
    pattern: /^while/,
    class: 'while'
  },
  {
    pattern: /^fn/,
    class: 'fn'
  },
  {
    pattern: /^\(/,
    class: '('
  },
  {
    pattern: /^\)/,
    class: ')'
  },
  // {
  //   pattern: /^\)|\(/,
  //   class: 'parentese'
  // },
  {
    pattern: /^{/,
    class: '{'
  },
  {
    pattern: /^}/,
    class: '}'
  },
  // {
  //   pattern: /^}|{/,
  //   class: 'chave'
  // },
  {
    pattern: /^\d*\.?\d+/,
    class: 'number'
  },
  {
    pattern: /^int$|^float$|^string$|^boolean$|^void$/,
    class: 'type'
  },
  {
    pattern: /^(true|false)/,
    class: 'true-false'
  },
  {
    pattern: /^=/,
    class: 'assignment'
  },
  {
    pattern: /^;/,
    class: 'end'
  },
  {
    pattern: /^\s$/,
    class: 'whitespace'
  },
  {
    pattern: /^[\+|\-|\*|\/]/,
    class: 'op_mat'
  },
  {
    pattern: /^&&|\^{1}|^and{1}|\|\|{1}|v{1}/,
    class: 'op_Logico'
  },
  {
    pattern: /^".*"$/,
    class: 'string'
  },
  {
    pattern: /^(==|>|>=|<|<=|=!)/,
    class: 'comparadores'
  },

  {
    pattern: /^return/,
    class: 'return'
  },
  {
    pattern: /^,/,
    class: 'comma'
  },
  {
    pattern: /^if/,
    class: 'if'
  },
  {
    pattern: /^else/,
    class: 'else'
  },
  // {
  //   pattern: /^print/,
  //   class: 'print'
  // },

  {
    //pattern: /^\$[a-zA-Z]+\s$/,
    pattern: /^\$[_a-zA-Z]\w*/,
    class: 'Id'
  }
];

module.exports = Lexems;
