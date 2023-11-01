const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [...a] = require("fs")
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
console.log(a[0] === a[1] ? "Yes" : "No")