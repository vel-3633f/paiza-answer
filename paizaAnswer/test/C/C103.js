const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n,m], ...a] = require("fs")
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

a = a.map((x) => x.toString());
// console.log(n, m, a);

const ans = [];
for (let i = 1; i <= n; i++){
  let test = []
  for (let j = 0; j < a.length; j += 2){
    if (i % a[j] === 0)  test.push(a[j+1])
  }
  if (test.length === 0) {
    test.push(i);
  }
  // console.log(test);
  ans.push(test.join(" "))
}
console.log(ans.join("\n"))
