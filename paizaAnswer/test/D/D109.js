const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[m,d]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

m = String(m);
d = String(d);

let sum = m + d;
console.log(sum.match(/^([0-9])\1+$/) !== null ? 'Yes' : 'No');