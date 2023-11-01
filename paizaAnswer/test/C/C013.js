const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N],[M],...a] = require('fs')
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
ans = [];

for (let i = 0; i < M; i++){
  let test = true;
  a[i] = String(a[i]);
  if (a[i].indexOf(N) != -1) {
    test = false;
  }
  if (test) ans.push(a[i]);
}
console.log(ans.length == 0 ? "none" : ans.join('\n'));