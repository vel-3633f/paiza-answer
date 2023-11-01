const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[H,W],...u] = require('fs')
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
let s = u.slice(0, H);
s = s.join('');
let p = u.slice(H);

let sum = 0;
for (let i = 0; i < H * W; i++){
  if (s.charAt(i) == 'o') {
    sum += p[i];
  }
}
console.log(sum);