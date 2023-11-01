const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[A,D,S],[n],...a] = require('fs')
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
let ans = [];
for (let i = 0; i < n; i++){
  let name = a[7 * i];
  let Amin = a[7 * i + 1];
  let Amax = a[7 * i + 2];
  let Dmin = a[7 * i + 3];
  let Dmax = a[7 * i + 4];
  let Smin = a[7 * i + 5];
  let Smax = a[7 * i + 6];
  if (A >= Amin && A <= Amax) {
    if (D >= Dmin && D <= Dmax) {
      if (S >= Smin && S <= Smax) {
        ans.push(name);
      }
    }
  }
}
console.log(ans.length==0?'no evolution':ans.join('\n'));
