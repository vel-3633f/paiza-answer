const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n], ...a] = require("fs")
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

// console.log(n, a);
const x = a.slice(0, n);
const c = a.slice(n, n + n * n);
const k = a.slice(n + n * n, n + n * n + 1);
let time = [];
for (let i = 0; i < n; i++) {
  time.push(c.slice(n*i, n*i + n));
}
const y = a.slice(n + n * n + 1);

// console.log(`x=${x}, k=${k}, y=${y}`, time);

let sum = 0;
for (let i = 0; i < k; i++){
  sum += x[y[i]-1];
  // console.log(sum);
  if (i !== k - 1) {
    sum += time[y[i] - 1][y[i + 1] - 1];
  }  
}

console.log(sum);
