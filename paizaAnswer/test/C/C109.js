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

let ans = [];
let b = [];
let c = [];
for (let i = 0; i < n; i++){
  b.push(a[i].replace(/[^0-9]/g, ''));
  c.push(a[i].replace(/[^0-9]/g, ''));
}


b.sort((x, y) => x - y);


for (let i = 0; i < n; i++){
  let rank = c.indexOf(b[i]);
  ans[i] = a[rank];
}

console.log(ans.join('\n'));

/*
5
paiza1
kirishima813
pizza99
sushi100
beef1001
*/