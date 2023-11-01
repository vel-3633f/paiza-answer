const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n, m], ...t] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
t = t.flat();
let a = t.slice(0,n);
let b = t.slice(n);

let ans = Array(n);
ans.fill(0);

let j = 0;

for (let i = 0; i < m; i++){
  while (true) {
    if (b[i] > a[j]) {
      ans[j] += a[j];
      b[i] -= a[j];
      j = j < n-1 ? j+1 : 0;
    } else {
      ans[j] += b[i];
      b[i] = 0;
      j = j < n-1 ? j+1 : 0;
      break;
    }
  }
}
console.log(ans.join('\n'));