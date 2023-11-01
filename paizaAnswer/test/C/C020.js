const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[m,p,q]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

console.log(m * ((100 - p) / 100) * ((100 - q) / 100));