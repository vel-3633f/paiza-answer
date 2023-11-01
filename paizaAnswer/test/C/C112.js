const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N], ...u] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

let s = [3], f = [3], t = [3];
for (let i = 0; i < N; i++){
  s[i] = u[i][0];
  f[i] = u[i][1];
  t[i] = u[i][2];
}
let sum = [3];

for (let i = 0; i < N; i++){
  sum[i] = s[i] + f[i] + (24 - t[i]);
}
console.log(Math.min(...sum));
console.log(Math.max(...sum));