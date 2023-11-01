const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...a] = require('fs')
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
let N = a[0];
let s = a.slice(1, N + 1);
let M = a.slice(N + 1, N + 2);
let p = a.slice(N+2)


let ans = [];
ans = s;

for (let i = 0; i < M; i++){
  let t = p.slice(3 * i, 3 * (i + 1));
  if (ans[t[0] - 1] > t[2]) {
    ans[t[0] - 1] = ans[t[0] - 1] - t[2];
    ans[t[1] - 1] = ans[t[1] - 1] + t[2];
  } else {
    ans[t[1] - 1] = ans[t[1] - 1] + ans[t[0] - 1];
    ans[t[0] - 1] = ans[t[0] - 1] - ans[t[0] - 1];
  }
}

console.log(ans.join('\n'));

/*
5
51
49
15
61
40
5
1 2 5
1 2 14
4 2 79
3 2 31
4 2 51
*/