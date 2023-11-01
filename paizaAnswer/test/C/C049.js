const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N],...f] = require('fs')
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
f = f.flat();
for (let i = 0; i < N; i++){
  if (i == 0) {
    sum = f[i] - 1;
  } else {
    sum = sum + Math.abs(f[i] - f[i-1]);
  }
}
console.log(sum);