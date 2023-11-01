const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...n] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

n = n.flat();
let ans = '';
for (let i = 0; i < 3; i++){
  for (let j = 0; j < n[i]; j++){
    ans += (i == 1 ? 'B' : 'A');
  }
}
console.log(ans);