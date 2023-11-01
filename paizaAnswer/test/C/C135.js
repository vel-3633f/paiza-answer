const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N,D],[P,M]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

let sum = 0;

sum = P * M;
let V = P * (D / 100); 
sum = sum - (V * N * Math.floor(M / N));
sum = Math.floor(sum);
console.log(sum);