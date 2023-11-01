const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...u] = require('fs')
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
let a = u[0];
let b = u[1];
let n = u[2];
let t = u.slice(3);

for (let i = 0; i < n; i++){
  let A = t[i * 2];
  let B = t[i * 2 + 1];
  if (A < a) {
    console.log('High');
  } else if (A == a) {
    console.log(B > b ? 'High' : 'Low');
  } else {
    console.log('Low')
  }
}

/*
7 3
4
7 1
7 4
5 3
10 1
*/