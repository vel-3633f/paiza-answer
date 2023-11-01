const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

answer = s.replace(/A/g, 4);
answer = answer.replace(/E/g, 3);
answer = answer.replace(/G/g, 6);
answer = answer.replace(/I/g, 1);
answer = answer.replace(/O/g, 0);
answer = answer.replace(/S/g, 5);
answer = answer.replace(/Z/g, 2);

console.log(answer);