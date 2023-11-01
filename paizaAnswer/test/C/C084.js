const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
let N = '';
for (let i = 0; i < A.length + 2; i++){
  N = '+' + N;
}
console.log(N);
console.log(`+${A}+`);
console.log(N);