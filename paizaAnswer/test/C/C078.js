const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n,c_1,c_2],...a] = require('fs')
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

let sum = 0, count = 0;
for (let i = 0; i < n-1; i++){
  if (a[i] >= c_2) {
    sum += count * a[i];
    count = 0;
  } else if (a[i] <= c_1) {
    count++;
    sum -= a[i];
  }
}

sum += count * a[n-1];

console.log(sum);