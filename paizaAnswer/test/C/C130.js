const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...t] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

let sum = 0;
let record = '';
for (let i = 0; i < n; i++){
  if (t[i][0] === t[i][1]) {
    t[i][0] == 'y' ? sum++ : record = record + (i + 1) + '\n';
  } else {
    record = record + (i + 1) + '\n'
  }
}
console.log(n - sum);;
console.log(record);

