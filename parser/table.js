module.exports = {
  C: {
    type: ['D', 'C'],
    Id: ['K', 'C'],
    if: ['T', 'C'],
    while: ['R', 'C'],
    fn: ['Z', 'C'],
    $: 'ɛ'
  },
  C1: {
    type: ['C'],
    if: ['C'],
    while: ['C'],
    Id: ['C'],
    print: ['C'],
    fn: ['C'],
    '}': 'ɛ',
    return: ['C2'],
    $: 'ɛ'
  },
  C2: {
    return: ['return', 'Y1', 'end', '}']
  },
  K: {
    Id: ['Id', 'A1']
    // F1: ['C']
  },
  A1: {
    assignment: ['assignment', 'O']
  },
  F1: {
    '(': ['(', 'X', ')']
  },
  D: {
    type: ['type', 'Id', 'end']
  },
  A: {
    Id: ['A1']
  },
  I: {
    if: ['(', 'Y', ')', '{', 'C', '}', 'I1']
  },
  I1: {
    else: ['{', 'C', '}'],
    $: 'ɛ'
  },
  Y: {
    Id: ['Y1', 'B'],
    number: 'ɛ',
    string: 'ɛ'
  },
  B: {
    W: ['Y1'],
    L: ['Y1']
  },
  Y1: {
    Id: ['Id'],
    number: ['number'],
    string: ['string']
  },
  R: {
    for: ['for', '(', 'A', 'Id', 'W', 'O', ';', 'A', '{', 'C', '}'],
    while: ['while', '(', 'Id', 'W', 'E', ')', '{', 'C']
  },
  E: {
    number: ['number'],
    Id: ['Id', 'E1']
  },
  E1: {
    '(': ['F1'],
    op_mat: ['op_mat', 'E'],
    end: ['end', 'C1']
  },
  Z: {
    fn: ['fn', 'Id', '(', 'P', '{', 'C1']
  },
  P: {
    type: ['type', 'Id', 'P1'],
    $: 'ɛ'
  },
  P1: {
    comma: ['comma', 'P'],
    ')': [')'],
    $: 'ɛ'
  },
  X: {
    Id: ['X1'],
    number: ['X1'],
    string: ['X1'],
    null: ['X1'],
    // '(': ['X1'],
    $: 'ɛ'
  },
  X1: {
    Id: ['Id', 'J'],
    number: ['number', 'J'],
    // number: ['X2', 'J'],
    string: ['X2', 'J'],
    null: ['X2', 'J']
  },
  J: {
    comma: ['comma', 'X1'],
    ')': [')', 'end'],
    $: 'ɛ'
  },
  X2: {
    Id: ['E'],
    number: ['E'],
    string: 'ɛ',
    null: 'ɛ'
  },
  O: {
    '(': ['O', ')', 'O1'],
    number: ['number', 'end'],
    Id: ['E']
  },
  O1: {
    number: ['number', 'M', '0'],
    $: 'ɛ'
  },
  type: {
    int: 'ɛ',
    float: 'ɛ',
    string: 'ɛ',
    boolean: 'ɛ',
    voId: 'ɛ'
  },
  M: {
    op_mat: ['op_mat']
  },
  // M: {
  //   '+': 'ɛ',
  //   '-': 'ɛ',
  //   '*': 'ɛ',
  //   '/': 'ɛ',
  // },
  L: {
    op_Logico: 'ɛ'
  },
  // L: {
  //   '!': 'ɛ',
  //   and: 'ɛ',
  //   '&&': 'ɛ',
  //   or: 'ɛ',
  //   '||': 'ɛ',
  // },
  W: {
    comparadores: ['comparadores']
  }
  // W: {
  //   '==': 'ɛ',
  //   '>': 'ɛ',
  //   '<=': 'ɛ',
  //   '<': 'ɛ',
  //   '!=': 'ɛ',
  // }
};
