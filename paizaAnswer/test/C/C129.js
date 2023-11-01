const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N,M],...a] = require('fs')
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
let A = [], B = [];
let countA = 0, countB = 0;
A = a.slice(0, M);
B = a.slice(M);
let test = new Set(A);
test = Array.from(test);
let check = true;


for (let i = 0; i < test.length; i++){
  let countA = 0, countB = 0;
  for (let j = 0; j < M; j++){
    if (A[j] == test[i]) {
      countA++
    }
    if (B[j] == test[i]) {
      countB++;
    }
  }
  if (countA !== countB) {
    check = false;
    break;
  }
}
console.log(check ? 'Yes' : 'No');
