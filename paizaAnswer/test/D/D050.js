const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n, m]] = require("fs")
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
if (n > 5) sum += 5;
else sum += n
if (m > 5) sum += 5;
else sum += m

console.log(sum);