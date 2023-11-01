const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A,B,N],...a] = require('fs')
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
let sum = A;

for (let i = 1; i < N; i++){
  let spanValue =  (a[2 * i] - a[2 * i -1])
  sum += A * 2 >= B * spanValue ? B * spanValue : A * 2;
}
console.log(sum + A);
