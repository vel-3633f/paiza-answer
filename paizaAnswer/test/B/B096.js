const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[h, w], ...a] = require("fs")
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
let ary = [];

const explosion = (n, m, ary) => {
  //横を#に変えた
  for (let i = 0; i < w; i++){
    ary[n][i] = "#";
  }
  //縦を#に変えた
  for (let i = 0; i < h; i++){
    ary[i][m] = "#";
  }
  return ary;
}

// console.log(h, w, a);
for (let i = 0; i < h; i++) {
  ary[i] = [];
  let dot = ".";
  for (let j = 0; j < w; j++) {
    ary[i].push(dot);
  }
}

// console.log(ary);

// console.log(explosion(2,2,ary))
console.log(a[0][2]);
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (a[i][j] === "#") {
      ary = explosion(i, j, ary);
    }
  }
}
console.log(ary);
let sum = 0;
//#の数を数える
for (let i = 0; i < h; i++){
  for (let j = 0; j < w; j++){
    if (ary[i][j] === "#") sum++;
  }
}
// console.log(sum);
// const moji = "abcdefg"
// console.log(moji + moji[1].replace('b','sa'))
// 4 4
// #.#.
// ....
// ..#.
// ....
