const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n, m],...a] = require("fs")
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
let ans = [];
let count = 0;
let sum = 0;
for (let j = 0; j < m; j++){
  for (let i = 0; i < n*m; i++){
    if (i % m == j) {
      if (a[i] <= 100 && a[i] >= 0) {
        sum += a[i];
        count++;
      }
    }
  }
  
  if (sum == 0) {
    ans.push(0);
  } else {
    ans.push(Math.floor(sum / count));
  }
  count = 0;
  sum = 0;
  
}


console.log(ans.join('\n'));
