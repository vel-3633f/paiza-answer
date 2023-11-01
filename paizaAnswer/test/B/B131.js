const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n,m],...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

a = a.flat();

let sum = 0;
let A = []
for (let i = 0; i < n; i++){
  A[i] = a.slice(m * i, m * i + m);
}
let X = a[n * m];
let rsAll = a.slice(n * m + 1);
let station = 0;

for (let j = 0; j < X; j++){
  let rs = rsAll.slice(2 * j, 2 * j + 2);
  let R = rs[0];
  let S = rs[1];
  let route = A[R - 1];
  if (station == 0) {
    sum += route[S-1];
  } else {
    sum += Math.abs(route[S - 1] - route[station - 1]);
  }
  station = S;
}
console.log(sum);
/*
8 9
0 1 3 4 22 34 60 63 85
0 35 44 50 53 56 61 90 99
0 7 15 35 42 51 53 96 100
0 23 40 41 44 64 67 83 91
0 5 36 47 59 70 81 87 97
0 5 11 14 30 34 64 76 90
0 4 5 22 57 62 90 91 98
0 8 13 25 35 41 60 68 82
10
2 6
3 4
6 1
4 4
5 4
8 6
1 8
5 6
4 6
5 1
*/