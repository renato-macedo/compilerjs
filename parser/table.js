module.exports = {
  C: {
    type: ['D', 'C'],
    id: ['K', 'C'],
    if: ['T', 'C'],
    while: ['R', 'C'],
    fn: ['Z', 'C'],
    $: ['ɛ']
  },
  C1: {
    type: ['C'],
    if: ['C'],
    while: ['C'],
    id: ['C'],
    print: ['C'],
    fn: ['C'],
    return: ['C2'],
    $: ['ɛ']
  },
  C2: {
    return: ['return', 'Y1', ';']
  },
  K: {
    id: ['id', 'A1']
    // F1: ['C']
  },
  A1: {
    '=': ['=', 'O']
  },
  F1: {
    '(': ['(', 'X', ')']
  },
  D: {
    type: ['type', 'id', ';']
  },
  A: {
    id: ['A1']
  },
  I: {
    if: ['(', 'Y', ')', '{', 'C', '}', 'I1']
  },
  I1: {
    else: ['{', 'C', '}'],
    $: ['ɛ']
  },
  Y: {
    id: ['Y1', 'B'],
    number: ['ɛ'],
    string: ['ɛ']
  },
  B: {
    W: ['Y1'],
    L: ['Y1']
  },
  Y1: {
    id: ['id'],
    number: ['number'],
    string: ['string']
  },
  R: {
    for: ['for', '(', 'A', 'id', 'W', 'O', ';', 'A', '{', 'C', '}'],
    while: ['while', '(', 'id', 'W', 'E', ')', '{', 'C', '}']
  },
  E: {
    number: ['number'],
    id: ['id', 'E1']
  },
  E1: {
    '(': ['F1'],
    op_mat: ['op_mat', 'E'],
    ';': [';', 'C1']
  },
  Z: {
    fn: ['fn', 'id', '(', 'P', ')', '{', 'C1', '}']
  },
  P: {
    type: ['type', 'id', 'P1'],
    $: ['ɛ']
  },
  P1: {
    comma: ['comma', 'P'],
    $: ['ɛ']
  },
  X: {
    id: ['X1'],
    number: ['X1'],
    string: ['X1'],
    null: ['X1'],
    // '(': ['X1'],
    $: ['ɛ']
  },
  X1: {
    id: ['id', 'J'],
    number: ['number', 'J'],
    // number: ['X2', 'J'],
    string: ['X2', 'J'],
    null: ['X2', 'J']
  },
  J: {
    comma: ['comma', 'X1'],
    ')': [')', ';'],
    $: ['ɛ']
  },
  X2: {
    id: ['E'],
    number: ['E'],
    string: ['ɛ'],
    null: ['ɛ']
  },
  O: {
    '(': ['O', ')', 'O1'],
    number: ['number', ';'],
    id: ['E']
  },
  O1: {
    number: ['number', 'M', '0'],
    $: ['ɛ']
  },
  type: {
    int: ['ɛ'],
    float: ['ɛ'],
    string: ['ɛ'],
    boolean: ['ɛ'],
    void: ['ɛ']
  },
  M: {
    op_mat: ['op_mat']
  },
  // M: {
  //   '+': ['ɛ'],
  //   '-': ['ɛ'],
  //   '*': ['ɛ'],
  //   '/': ['ɛ'],
  // },
  L: {
    op_Logico: ['ɛ']
  },
  // L: {
  //   '!': ['ɛ'],
  //   and: ['ɛ'],
  //   '&&': ['ɛ'],
  //   or: ['ɛ'],
  //   '||': ['ɛ'],
  // },
  W: {
    comparadores: ['comparadores']
  }
  // W: {
  //   '==': ['ɛ'],
  //   '>': ['ɛ'],
  //   '<=': ['ɛ'],
  //   '<': ['ɛ'],
  //   '!=': ['ɛ'],
  // }
};
