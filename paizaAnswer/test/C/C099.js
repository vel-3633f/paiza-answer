const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, D], ...d] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
d = d.flat();
let sum = D;
for (let i = 0; i < n - 1; i++){
  if (D - d[i] < 1) {
    sum = sum + 1;
  } else {
    sum = sum + D - d[i];
  }
}
console.log(D * sum);