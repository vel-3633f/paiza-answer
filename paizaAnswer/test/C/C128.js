const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N], ...x] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
x = x.flat();

let d1 = 1, d2 = 0, u1 = x[0], u2 = 1;
let fracUp, fracDown;
for (let i = 0; i < N; i++){
  if (i == 0) {
    fracUp = u1;
    fracDown = d1;
  } else {
    fracUp = x[i] * u1 + u2;
    fracDown = x[i] * d1 + d2;
    u2 = u1;
    u1 = fracUp;
    d2 = d1;
    d1 = fracDown;
  }
}
console.log(fracUp + ' ' + fracDown);