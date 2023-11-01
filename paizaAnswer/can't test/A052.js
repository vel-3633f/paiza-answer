const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n],[a,b]] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
  );

let num = 0;
let sum = 0;
let test = [];
let A = Math.floor(n / a) + 1;
let B = Math.floor(n / b) + 1;

for (let i = 0; i <= A; i++){
  for (let j = 0; j <= B; j++){
    if (a * i + b * j <= n) {
      test.push(a * i);
      test.push(b * j);
      test.push(a*i+b*j);
    }
  }
}
test.push(n);
sum = Array.from(new Set(test));
console.log(n + 1 - sum.length);
