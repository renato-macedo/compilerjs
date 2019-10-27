// module.exports = {
//   // C: {
//   //   D: ['C'],
//   //   Id: ['K'],
//   //   I: ['C'],
//   //   R: ['C'],
//   //   Z: ['C'],
//   //   $: 'ɛ',
//   // },
//   C: {
//     type: ['D', 'C'],
//     Id: ['K', 'C'],
//     if: ['T', 'C'],
//     while: ['R', 'C'],
//     fn: ['Z'],
//     $: 'ɛ'
//   },

//   K: {
//     Id: ['Id', 'A1'],
//     F1: ['C']
//   },
//   A1: {
//     assignment: ['assignment', 'O']
//   },
//   F1: {
//     abre_parentese: ['abre_parentese', 'X', 'fecha_parentese']
//   },
//   D: {
//     type: ['type', 'Id', 'end']
//   },
//   A: {
//     Id: ['A1']
//   },
//   I: {
//     if: [
//       'abre_parentese',
//       'Y',
//       'fecha_parentese',
//       'abre_chave',
//       'C',
//       'fecha_chave',
//       'I1'
//     ]
//   },
//   I1: {
//     else: ['abre_chave', 'C', 'fecha_chave'],
//     $: 'ɛ'
//   },
//   Y: {
//     Y1: ['B']
//   },
//   B: {
//     W: ['Y1'],
//     L: ['Y1']
//   },
//   Y1: {
//     Id: 'ɛ',
//     number: 'ɛ',
//     string: 'ɛ'
//   },
//   R: {
//     for: [
//       'abre_parentese',
//       'A',
//       'Id',
//       'W',
//       'O',
//       ';',
//       'A',
//       'abre_chave',
//       'C',
//       'fecha_chave'
//     ],
//     while: [
//       'abre_parentese',
//       'Id',
//       'W',
//       'E',
//       'fecha_parentese',
//       'abre_chave',
//       'C',
//       'fecha_chave'
//     ]
//   },
//   E: {
//     number: 'ɛ',
//     Id: ['E1']
//   },
//   E1: {
//     F1: 'ɛ',
//     $: 'ɛ'
//   },
//   Z: {
//     fn: [
//       'Id',
//       'abre_parentese',
//       'P',
//       'fecha_parentese',
//       'abre_chave',
//       'C1',
//       'fecha_chave'
//     ]
//   },
//   P: {
//     T: [
//       'Id',
//       'abre_parentese',
//       'P1',
//       'fecha_parentese',
//       'abre_chave',
//       'C1',
//       'fecha_chave'
//     ],
//     $: 'ɛ'
//   },
//   P1: {
//     comma: ['P'],
//     $: 'ɛ'
//   },
//   C1: {
//     C: ['C2']
//   },
//   C2: {
//     return: ['Y1', ';'],
//     $: 'ɛ'
//   },
//   X: {
//     X1: 'ɛ',
//     $: 'ɛ'
//   },
//   X1: {
//     X2: ['J']
//   },
//   J: {
//     comma: ['X1'],
//     $: 'ɛ'
//   },
//   X2: {
//     E: 'ɛ',
//     string: 'ɛ',
//     null: 'ɛ'
//   },
//   O: {
//     abre_parentese: ['O', 'fecha_parentese', 'O1'],
//     number: ['O1']
//   },
//   O1: {
//     M: ['O'],
//     $: 'ɛ'
//   },
//   type: {
//     int: 'ɛ',
//     float: 'ɛ',
//     string: 'ɛ',
//     boolean: 'ɛ',
//     voId: 'ɛ'
//   },
//   M: {
//     op_mat: 'ɛ'
//   },
//   // M: {
//   //   '+': 'ɛ',
//   //   '-': 'ɛ',
//   //   '*': 'ɛ',
//   //   '/': 'ɛ',
//   // },
//   L: {
//     op_Logico: 'ɛ'
//   },
//   // L: {
//   //   '!': 'ɛ',
//   //   and: 'ɛ',
//   //   '&&': 'ɛ',
//   //   or: 'ɛ',
//   //   '||': 'ɛ',
//   // },
//   W: {
//     comparadores: 'ɛ'
//   }
//   // W: {
//   //   '==': 'ɛ',
//   //   '>': 'ɛ',
//   //   '<=': 'ɛ',
//   //   '<': 'ɛ',
//   //   '!=': 'ɛ',
//   // }
// };

module.exports = {
  EXP: {
    type: ['DECL', 'end', '$EXP'],
    if: ['IF_STMT', '$EXP'],
    while: ['LOOP', '$EXP'],
    Id: ['ATTR', 'end', '$EXP'],
    print: ['PRINT_FN', 'end', '$EXP'],
    fn: ['FN_DECL'],
    return: ['return', '$EXP']
  },
  $EXP: {
    type: ['EXP'],
    if: ['EXP'],
    while: ['EXP'],
    Id: ['EXP'],
    print: ['EXP'],
    fn: ['FN_DECL'],
    '}': 'ɛ',
    $: 'ɛ'
  },
  DECL: {
    type: ['type', 'Id']
  },
  ATTR: {
    Id: ['Id', 'assignment', 'VALUE_EXP']
  },
  VALUE_EXP: {
    '(': ['VALUE', 'ADD_OP'],
    null: ['VALUE', 'ADD_OP'],
    bool: ['VALUE', 'ADD_OP'],
    string: ['VALUE', 'ADD_OP'],
    number: ['VALUE', 'ADD_OP'],
    Id: ['VALUE', 'ADD_OP']
  },
  ADD_OP: {
    op_mat: ['op_mat', 'VALUE_EXP'],
    comparadores: ['comparadores', 'VALUE_EXP'],
    op_Logico: ['op_Logico', 'VALUE_EXP'],
    end: 'ɛ',
    ')': 'ɛ'
  },
  VALUE: {
    '(': ['(', 'VALUE_EXP', ')'],
    null: ['null'],
    'true-false': ['true-false'],
    string: ['string'],
    number: ['number'],
    Id: ['Id']
  },
  IF_STMT: {
    if: ['if', '(', 'VALUE_EXP', ')', '{', 'EXP', '}', 'ELSE_STMT']
  },
  ELSE_STMT: {
    else: ['else', '$ELSE_STMT'],
    type: 'ɛ',
    '}': 'ɛ',
    if: 'ɛ',
    while: 'ɛ',
    print: 'ɛ',
    $: 'ɛ'
  },
  $ELSE_STMT: {
    '{': ['{', 'EXP', '}'],
    if: ['IF_STMT']
  },
  LOOP: {
    while: ['while', '(', 'VALUE_EXP', ')', '{', 'EXP', '}']
  },
  PRINT_FN: {
    print: ['print', '(', 'VALUE_EXP', ')']
  },
  FN_DECL: {
    fn: ['fn', 'Id', '(', 'PARAM', ')', '{', 'EXP', '}']
  },
  PARAM: {
    type: ['type', 'Id', 'PARAM2'],
    $: 'ɛ'
  },
  PARAM2: {
    comma: ['comma', 'PARAM'],
    ')': 'ɛ',
    $: 'ɛ'
  }
  // RETURN: {
  //   return: []
  // }
};
