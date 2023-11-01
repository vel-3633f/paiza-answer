const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n,a,b]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
let answer = (a * b >= n ? 'Yes' : 'No');
console.log(answer);
