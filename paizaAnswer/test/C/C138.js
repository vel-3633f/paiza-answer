const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n],...a] = require("fs")
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
const ranking = [];

console.log(n, a);

for (let item of a) {
  let sum = 1;
  for (let i = 0; i < a.length; i++){
    if (item < a[i]) sum++;
  }
  ranking.push(sum);
}
console.log(ranking.join());
// 2
// 1
// 2
// 4