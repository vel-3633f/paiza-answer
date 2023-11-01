const { match } = require('assert');

const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n],[g],...s] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);
s = s.flat();
let ans = '';
for (let i = 0; i < n; i++){
  ans = s[i].indexOf(g) != -1 ? ans + s[i] + '\n' : ans;
}
if (ans == '') {
  ans = 'None';
}
console.log(ans);