const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N,M],[A,B,C],...r] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
r = r.flat();
let closeNumber = 0;

for (let i = 0; i < N; i++){
  if (C * r[i] - A - (B * M) < 0) {
    closeNumber++;
  }
}
console.log(closeNumber);