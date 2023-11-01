const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n],...a] = require('fs')
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

for (let i = 0; i < n-1; i++){
  if (a[i].slice(-1) !== a[i + 1].slice(0,1)) {
    console.log(a[i].slice(-1) + ' ' + a[i + 1].slice(0,1));
    break;
  } else if(i == n-2){
    console.log('Yes');
  } else {
  }
}