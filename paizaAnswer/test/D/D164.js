const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

let num = 1;
let ans = "NG";
while (num <= 256) {
  // console.log(num);
  if (num === N) ans = "OK";
  num *= 2;
}

console.log(ans)