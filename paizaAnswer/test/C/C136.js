const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[N],...x] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

x = x.flat();
let max = 0, min = 0;
let count = 0,up=0,down=0;

for (let i = 0; i < N-1; i++){
  if (x[i] > x[i + 1]) {
    down++;
    up = 0;
  } else {
    up++;
    down = 0;
  }
  max = max < down ? down : max;
  min = min < up ? up : min;
}
console.log(max, min);