const Lexems = [
  {
    pattern: /while/,
    class: '^while'
  },
  {
    pattern: /fn/,
    class: 'funcao'
  },
  {
    pattern: /^\(/,
    class: 'abre_parentese'
  },
  {
    pattern: /^\)/,
    class: 'fecha_parentese'
  },
  {
    pattern: /^{/,
    class: 'abre_chave'
  },
  {
    pattern: /^}/,
    class: 'fecha_chave'
  },
  {
    pattern: /[0-9]+/,
    class: 'number'
  },
  {
    pattern: /^int$|^float$|^string$|^boolean$|^void$/,
    class: 'type'
  },
  {
    //pattern: /^\$[a-zA-Z]+\s$/,
    pattern: /^\$[a-zA-Z_$][a-zA-Z_$0-9]*$/,
    class: 'Id'
  },

  {
    pattern: /=/,
    class: 'assignment'
  },
  {
    pattern: /;/,
    class: 'end'
  },
  {
    pattern: /^\s$/,
    class: 'whitespace'
  },
  {
    pattern: /[\+|\-|\*|\/]/,
    class: 'op_mat'
  },
  {
    pattern: /&&|\^{1}|and{1}|\|\|{1}|v{1}/,
    class: 'op_Logico'
  },
  {
    pattern: /^".*"$/,
    class: 'string'
  },
  {
    pattern: /(==|>|>=|<|<=|=!)/,
    class: 'comparadores'
  }
];

module.exports = Lexems;
