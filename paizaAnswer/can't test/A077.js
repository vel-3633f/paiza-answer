const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[N, R], ...a] = require("fs")
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

// console.log(N, R, a);
// Rは半径
// Nは火山の数
// aは火山の座標
// 火山のx座標
const x = [];
// 火山のy座標
const y = [];

for (let i = 0; i < N; i++) {
  x.push(a[i * 2]);
  y.push(a[i * 2 + 1]);
}
// console.log(x, y);

const xMax = Math.max(...x);
const yMax = Math.max(...y);
// console.log(xMax,yMax)

const oldMap = [];
const newMap = [];
for (let i = 0; i < yMax; i++) {
  oldMap[i] = [];
  newMap[i] = [];
  for (let j = 0; j < xMax; j++) {
    oldMap[i].push(".");
    newMap[i].push(".");
  }
}

for (let i = 0; i < N; i++) {
  oldMap[y[i] - 1][x[i] - 1] = "#";
  newMap[y[i] - 1][x[i] - 1] = "#";
}


// console.log(oldMap);
// console.log(map);
for (let i = 0; i < yMax; i++) {
  for (let j = 0; j < xMax; j++) {
    if (oldMap[i][j] === "#") {
      // console.log("OK");
      for (let t = 1; t <= R; t++) {
        //左を#にする
        if (newMap[i][j - t] == ".") {
          // console.log("OK2");
          newMap[i][j - t] = "#";
        }
        //右
        if (newMap[i][j + t] == ".") {
          // console.log("OK2");
          newMap[i][j + t] = "#";
        }
        //左を#にする
        if (newMap[i + t][j] == ".") {
          // console.log("OK2");
          newMap[i][j - t] = "#";
        }
      }
    }
  }
}
console.log(newMap);

// 5 1
// 2 2
// 1 3
// 6 1
// 6 3
// 7 4

//ans 2
