const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n, m], [h, w], ...a] = require("fs")
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

let field = [];
let r = [];
for (let i = 0; i < h; i++) {
  let test = [];
  for (let j = 0; j < w; j++) {
    test.push(0);
  }
  field.push(test);
}
for (let i = 0; i < m; i++) {
  r.push(0);
}

for (let i = 0; i < n; i++) {
  let harvest = a.slice(i * 5, i * 5 + 5);
  for (let j = harvest[0] - 1; j <= harvest[1] - 1; j++) {
    for (let k = harvest[2] - 1; k <= harvest[3] - 1; k++) {
      if (field[j][k] !== 0) {
        r[field[j][k] - 1] += 1;
      }
      field[j][k] = harvest[4];
    }
  }
}
let ans = [];
let kari = "";
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (field[i][j] == 0) {
      field[i][j] = ".";
    }
    kari += field[i][j];
  }
  ans.push(kari);
  kari = "";
}

console.log(r.join("\n"));
console.log(ans.join("\n"));
