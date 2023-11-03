const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[x]] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
  );

const alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (alp.indexOf(x) !== -1) {
  console.log(alp.indexOf(x) + 1);
} else {
  console.log(x);
}
