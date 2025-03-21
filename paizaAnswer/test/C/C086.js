const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[S]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

answer = S.replace(/[aiueoAIUEO]/g, '');
console.log(answer);