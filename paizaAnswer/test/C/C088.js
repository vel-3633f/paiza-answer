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
const value = a.slice(0, N);
const m = a.slice(N, N + 1);
const k = a.slice(N + 1, N + 2);
const data = a.slice(N + 2);
let ans = m;

for (let i = 0; i < k; i++){
  let data_1 = data.slice(2 * i, 2 * i + 1);
  let data_2 = data.slice(2 * i + 1, 2 * i + 2);
  if (ans >= value[data_1 - 1] * data_2) {
    ans -= value[data_1 - 1] * data_2;
  }
}
console.log(ans);
