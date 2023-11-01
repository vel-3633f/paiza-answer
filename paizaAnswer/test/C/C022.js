const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N],...n] = require('fs')
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
let highPrice = 0,lowPrice=0;
let startPrice = 0, finishPrice = 0;

for (let i = 0; i < N; i++){
  let a = n[4 * i], b = n[4 * i + 1], c = n[4 * i + 2], d = n[4 * i + 3];
  if (i == 0) {
    startPrice = a;
    highPrice = c;
    lowPrice = d;
  }
  else if (i == N - 1) finishPrice = b;
  if (highPrice < c) highPrice = c;
  if (lowPrice > d) lowPrice = d;
  console.log(lowPrice, d, i, lowPrice > d);
}
console.log(startPrice, finishPrice, highPrice, lowPrice);

// 14672