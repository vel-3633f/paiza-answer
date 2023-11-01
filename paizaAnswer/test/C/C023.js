const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...u] = require('fs')
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
let n = u[6];
let A = u.slice(0, 6);
let B = u.slice(7);
let count = 0;
let ans = [];

for (let i = 0; i < n; i++){
  for (let j = 0; j < 6; j++){
    let kuji = B.slice(i * 6, i * 6 + 6);
    if (A.indexOf(kuji[j]) != -1) {
      count++;
    }
  }
  ans.push(count);
  count = 0;
}
console.log(ans.join('\n'));