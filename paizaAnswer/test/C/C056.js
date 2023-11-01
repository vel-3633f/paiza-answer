const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n,m],...u] = require('fs')
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
  let test = u[2 * i];
  let abs = u[2 * i + 1];
  const sum = test - abs * 5;
  if (sum < 0) sum = 0;
  if (sum >= m) ans.push(i + 1);
}
console.log(ans.join('\n'));