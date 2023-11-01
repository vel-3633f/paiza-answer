const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n],...u] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

u = u.flat();
let sum = 0;
for (let i = 0; i < n; i++){
  let day = u[2 * i]+'';
  let price = u[2 * i + 1];
  if (day.indexOf(3) != -1) {
    sum += parseInt(price * 0.03);
  } else if (day.indexOf(5) != -1) {
    sum += parseInt(price * 0.05);
  } else {
    sum += parseInt(price * 0.01);
  }
}
console.log(sum);

