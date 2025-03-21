const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

console.log(x.charAt(0) == 'A' ? x.replace('A', 'R') : x);
