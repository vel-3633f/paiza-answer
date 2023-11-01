const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A,B,C]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

for (let i = 1; i <= A; i++){
  if (i % B == 0 && i % C == 0) {
    console.log('AB');
  } else if (i % B == 0) {
    console.log('A');
  } else if (i % C == 0) {
    console.log('B');
  } else {
    console.log('N');
  };
};
