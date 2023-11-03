// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let [...a] = require("fs")
//   .readFileSync(file, "utf8")
//   .trim()
//   .split("\n")
//   .map((r) =>
//     r
//       .trim()
//       .split(/\s+/)
//       .map((i) => (isNaN(i) ? i : +i))
//   );

// a = a.flat();
// let count = 0;
// for (let item of a) {
//   if (item === "no") count++;
// }
// console.log(count);

let array = [1, 30, 10, 20];

// function isBigEnough(value) {
//   return value >= 10;
// }

// const isBigEnough = (value) => {
//   return value >= 10;
// }

// const setArray = array.filter(isBigEnough)

const setArray = array.filter(value =>
  value >= 10)
  
// const a = array.filter()

console.log(setArray)

// () => 式

// 引数 => 式

// (引数) => 式

// (引数1, 引数N) => 式

// () => {
//   文
// }

// 引数 => {
//   文
// }

// (引数1, 引数N) => {
//   文
// }

// console.log(filtered);