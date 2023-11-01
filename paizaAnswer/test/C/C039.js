const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[E]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
let count_1, count_2, sum = 0;
count_1 = (E.match(/\</g) || []).length;
count_2 = (E.match(/\//g) || []).length;
sum = count_1 * 10 + count_2;
console.log(sum);