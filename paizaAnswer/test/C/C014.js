const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n,r],...u] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

u = u.flat();
let ans = [];

for (let i = 0; i < n; i++){
  let h = u[i * 3];
  let w = u[i * 3 + 1];
  let d = u[i * 3 + 2];
  if (2 * r <= h && 2 * r <= w && 2 * r <= d) {
    ans.push(i+1);
  }
}
console.log(ans.join('\n'));
