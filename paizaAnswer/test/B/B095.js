const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n, m], ...a] = require("fs")
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

const A = a.slice(0, m);
const h = a.slice(m);
// console.log(n, m, A, h);
let max = 0;
for (let i = 0; i < n; i++) {
  let score = 100;
  let person = h.slice(i * m, i * m + m);
  // console.log(person);
  for (let j = 0; j < m; j++) {
    let dif = Math.abs(person[j] - A[j]);
    if (dif >5 && dif <= 10) {
      score -= 1;
    } else if (dif >5 && dif <= 20) {
      score -= 2;
    } else if (dif >5 && dif <= 30) {
      score -= 3;
    } else if (dif > 30) {
      score -= 5;
    }
    // console.log(`i=${j}差は${dif},scoreは${score}`)
  }
  // console.log(score);
  if (score >= max) max = score; 
}

console.log(max);