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


S = S.replace(/[^0-9]/g, '');
let ans = 0; 
for (let i = 0; i < S.length; i++){
  if (S.charAt(i) == 0) {
    ans += 24;
  } else if (S.charAt(i) == 1) {
    ans += 6;
  } else if (S.charAt(i) == 2) {
    ans += 8;
  } else if (S.charAt(i) == 3) {
    ans += 10;
  } else if (S.charAt(i) == 4) {
    ans += 12;
  } else if (S.charAt(i) == 5) {
    ans += 14;
  } else if (S.charAt(i) == 6) {
    ans += 16;
  } else if (S.charAt(i) == 7) {
    ans += 18;
  } else if (S.charAt(i) == 8) {
    ans += 20;
  } else {
    ans += 22;
  }
}
console.log(ans);
