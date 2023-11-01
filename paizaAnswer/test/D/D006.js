const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n,s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
  
if (s == 'km') {
  console.log(n * 10 ** 6);
} else if (s == 'm') {
  console.log(n * 10 ** 3);
} else {
  console.log(n * 10);
}
