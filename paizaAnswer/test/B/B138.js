const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[h,w], ...a] = require("fs")
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

let count = 0;

for (let i = 1; i < h - 1; i++){
  for (let j = 1; j < w - 1; j++){
    let A = a[i].charAt(j);
    if (A == '.') {
      if (a[i].charAt(j - 1) == '#' && a[i].charAt(j + 1) == '#'){
        if (a[i - 1].slice(j - 1, j + 2) == '###' && a[i + 1].slice(j - 1, j + 2) == '###') {
          count++;
        }
        
      }
    }
  }
}
console.log(count);