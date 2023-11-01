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
let N = a[0], M = a[1];
let f = a.slice(2);
let point = 0, cash = N;
let ans = '';
for (let i = 0; i < M; i++){
  if (f[i] > point) {
    cash -= f[i];
    point += f[i] / 10;
  } else {
    point -= f[i];
  }
  ans = ans + cash + ' ' + point + '\n';
}
console.log(ans);