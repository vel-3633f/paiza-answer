const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[r_1,r_2]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
console.log(r_1 ** 3 - r_2 ** 3);
