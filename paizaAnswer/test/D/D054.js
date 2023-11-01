const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[x]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
let num = String(x).length;
let ans = 'OK'
console.log(num,typeof num < 11);
console.log(num < 11? 11 - num : ans);
