const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A],[B],[C]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

if (A == B && B == C) {
  console.log('YES')
} else {
  console.log('NO')
}