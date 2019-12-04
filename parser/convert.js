const table = require('./table');
const fs = require('fs');

const keys = Object.keys(table);

for (const key of keys) {
  const exp = table[key];
  const ks = Object.keys(exp);
  for (k of ks) {
    table[key][k] = table[key][k].map(e => {
      if (e === e.toLowerCase()) {
        return { value: e, exp: false };
      } else {
        return { value: e, exp: true };
      }
    });
  }
}
''.toLowerCase();
fs.writeFileSync('./table.json', JSON.stringify(table, null, 2));
