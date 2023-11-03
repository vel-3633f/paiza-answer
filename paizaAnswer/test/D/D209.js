const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n],[str]] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
  );

let strAry = [...str];
let sum = 0;
n = n.toString()

for (let item of strAry) {
  if (item === n) sum++;
}
let newAry = strAry.filter((val) => {
  return val === n;
})

console.log(newAry.length);