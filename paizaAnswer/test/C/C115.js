const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...a] = require('fs')
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
let sum=0;
for (let i = 0; i < n; i++){
  if (a[i] <= m) {
    sum = sum + a[i];
  }
}
console.log(sum);
