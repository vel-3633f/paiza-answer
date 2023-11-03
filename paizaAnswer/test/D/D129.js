const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[p,x,y]] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
);
  
let del = parseInt(p * (100 + y) / 100) - parseInt(p * (100 + x) / 100) 
console.log(del)