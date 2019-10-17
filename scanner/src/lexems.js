const Lexems = [
  {
    pattern: /^while/,
    class: 'while'
  },
  {
    pattern: /^fn/,
    class: 'funcao'
  },
  // {
  //   pattern: /^\(/,
  //   class: 'abre_parentese'
  // },
  // {
  //   pattern: /^\)/,
  //   class: 'fecha_parentese'
  // },
  {
    pattern: /^\)|\(/,
    class: 'parentese'
  },
  // {
  //   pattern: /^{/,
  //   class: 'abre_chave'
  // },
  // {
  //   pattern: /^}/,
  //   class: 'fecha_chave'
  // },
  {
    pattern: /^}|{/,
    class: 'chave'
  },
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
  {
    //pattern: /^\$[a-zA-Z]+\s$/,
    pattern: /^\$[_a-zA-Z]\w*/,
    class: 'Id'
  }
];

module.exports = Lexems;
