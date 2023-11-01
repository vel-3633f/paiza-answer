const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[xc,yc,r_1,r_2],[n],...a] = require('fs')
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
let ans = '';
let dis;
for (let i = 0; i < n; i++){
  let x = a[i * 2], y = a[i * 2 + 1];
  dis=(x-xc)**2+(y-yc)**2
  if (dis >= r_1 ** 2 && dis <= r_2 ** 2) {
    ans += 'yes\n' 
  } else {
    ans += 'no\n'
  }
}
console.log(ans);