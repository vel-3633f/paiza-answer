const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[a,b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
let answer = (a * b < 10000 ? a * b : 'No');
console.log(answer);
