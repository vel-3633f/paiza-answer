const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[M],...a] = require('fs')
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
let N = a.slice(M, M + 1);
let b = a.slice(M + 1, M +N +1);
a = a.slice(0,M);

let aTest = false;
let bTest = false;
let count = 0;
let ans = '';

for (let i = 1; i <= 31; i++) {
  aTest = a.some((num) => num == i);
  bTest = b.some((num) => num == i);
  if (aTest && bTest) {
    ans = ans + (count % 2 ? 'B' : 'A') + '\n';
    count++;
  } else if (aTest || bTest) {
    ans = ans + (aTest?'A':'B') + '\n';
  } else {
    ans = ans + 'x\n';
  }
}
console.log(ans);

