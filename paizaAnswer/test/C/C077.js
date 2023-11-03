const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[k, n], ...a] = require("fs")
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

// console.log(k, n, a);
const ans = [];
for (let i = 0; i < k; i++) {
  const day = a[2 * i];
  const num = a[2 * i + 1];
  let sum = 0;

  sum += (100 / n) * num;
  if (day <= 9 && day >= 1) {
    sum =  parseInt(sum * 0.8);
  } else if (day >= 10) {
    sum = 0;
  }


  if (sum >= 80) {
    ans.push("A");
  } else if (sum >= 70) {
    ans.push("B");
  } else if (sum >= 60) {
    ans.push("C");
  } else {
    ans.push("D");
  }
  // console.log(sum);
}
console.log(ans.join('\n'));
// 3 25
// -2 17
// -7 20
// 2 24

// C
// A
// B
