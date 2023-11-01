const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N],...a] = require('fs')
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
let count = 0;

let ans = [];
let j = 1;
while (j != N) {
  for (let i = 0; i < N; i++){
    if (a[i] == j) {
      j++;
      if (j == N) break;
    } else if (a[i] == N) {
      count++;
    }
  }
}
console.log(count);

