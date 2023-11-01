// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let [[N,H,W,P,Q],...a] = require('fs')
//   .readFileSync(file, 'utf8')
//   .trim()
//   .split('\n')
//   .map(r =>
//     r
//       .trim()
//       .split(/\s+/)
//       .map(i => (isNaN(i) ? i : +i))
// );

// a = a.flat();

// let ans = [];
// let check = true;
// let count=Math.abs(P) + Math.abs(Q);

// //j,Qが横、i,Pが高さ

// for (let i = 0; i < H; i++){
//   for (let j = 0; j < W; j++){
//     let d = Math.abs(P - i) + Math.abs(Q - j);
//     for (let n = 0; n < N; n++){
//       if (a[2 * n] == i && a[2 * n + 1] == j) {
//         check = false;
//         break;
//       }
//       check = true;
//     }
//     if (check) {
//       if (count > d) {
//         count = d;
//         ans = [];
//         ans.push(i);
//         ans.push(j);
//       } else if (count == d) {
//         ans.push(i);
//         ans.push(j);
//       }
//     }
//   }
// }
// let res = '';
// let c = 0;
// while (c < ans.length) {
//   res += !(c % 2) ? String(ans[c]) : ' ' + ans[c] + '\n';
//   c++;
// }

// console.log(res);


// お手本コード
const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [N, H, W, P, Q] = input[0].split(' ').map(Number);
const A = input.slice(1).map(num => num.split(' ').map(Number).join(' '));
const arr = [];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    arr.push([i, j]);
  }
}
console.log(arr,A);
const emptyArea = arr.filter(nums => !A.includes(nums.join(' ')));
console.log(arr,emptyArea);
const answer = {};
console.log(answer);
emptyArea.forEach((arr, i) => {
  const [p, q] = arr;
  const distance = Math.abs(P - p) + Math.abs(Q - q);
  // answer[[p, q]] = result;
  answer[[p, q]] = distance;
});
const minNum = Math.min(...Object.values(answer));

for (let key in answer) {
  if (answer[key] === minNum) {
    console.log(key.split(',').join(' '));
  }
}
