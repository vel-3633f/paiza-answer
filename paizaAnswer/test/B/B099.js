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

const ans = [...Array(n)].map(() => 0);
let road = [];

for (let i = 0; i < n; i++){
  let rain = a.slice(i * n, i * n + n);
  for (let j = 0; j < n; j++){
    if (rain[j] >= m) {
      ans[j] += 1;
    }
  }
}
for (let i = 0; i < n; i++){
  if (ans[i] == 0) {
    road.push(i+1)
  }
}
console.log(road.length == 0 ? 'wait' : road.join(' '));