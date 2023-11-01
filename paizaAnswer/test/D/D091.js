const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[...a]] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
  );
let sum = 0;
for (let item of a) {
    if(item <= 2) sum++
  }
console.log(sum);