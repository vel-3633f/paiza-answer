const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n], ...a] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
  );

a = a.flat();

let array = [];
for (let i = 0; i < n; i++) {
  array[i] = a.slice(i * n, i * n + n);
}
// console.log(array[0][0]);

const ans = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let test = true;
    //左を判定
    if (j - 1 === -1) {
      if (array[i][j] <= 0) test = false;
    } else {
      if (array[i][j] <= array[i][j - 1]) test = false;
    }
    //右を判定
    if (j + 1 === n) {
      if (array[i][j] <= 0) test = false;
    } else {
      if (array[i][j] <= array[i][j + 1]) test = false;
    }
    // 下を判定
    if (i + 1 == n) {
      if (array[i][j] <= 0) test = false;
    } else {
      if (array[i][j] <= array[i + 1][j]) test = false;
    }
    // 上を判定
    if (i - 1 == -1) {
      if (array[i][j] <= 0) test = false;
    } else {
      if (array[i][j] <= array[i - 1][j]) test = false;
    }
    // console.log(i, j, array[i][j], test);
    if (test) ans.push(array[i][j]);
  }
}


// console.log(ans);

// console.log(ans.join("\n"))
ans.sort((a, b) => {
  return b - a;
});
console.log(ans.join('\n'))

// const highest = (num,ary) => {
//   let test = false;

//   return test;
// };
// 3
// 90 10 10
// 10 30 20
// 10 10 20
