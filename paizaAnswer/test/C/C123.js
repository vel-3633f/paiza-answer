const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

a = a.flat();

let N = a[0];
let Y = a.slice(1, N + 1);
let M = a.slice(N + 1, N + 2);
let t = a.slice(N + 2, N + M + 2);

answer = Array(N);
answer.fill(0);

for (let i = 0; i < M; i++){
  let A = t[i * 3];
  let B = t[i * 3 + 1];
  let C = t[i * 3 + 2];

  for (let j = A - 1; j <= B - 1; j++){
    answer[j] = answer[j] + C;
    answer[j] = answer[j] <= Y[j] ? answer[j] : Y[j];
  }
}
console.log(answer.join('\n'));