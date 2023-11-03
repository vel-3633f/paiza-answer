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

let sum = 0;
// console.log(a);

const uniqueArray = a.filter((value, index, Ary) => {
  return Ary.indexOf(value) === index;
}).sort((a, b) => a - b);

// console.log(uniqueArray);

for (let i = 1; i <= n; i++){
  if (uniqueArray.indexOf(i) === -1) {
    sum++;
  }
}

console.log(sum);