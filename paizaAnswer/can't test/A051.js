const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[h, w], ...a] = require("fs")
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

let colAry = [];
let sum = 0;
for (let i = 0; i < h; i++) {
  colAry.push(a.slice(i * w, i * w + w));
}
console.log(colAry);


let max1 = Math.max(...colAry[0]);
let first = [];
for (let i = 0; i < w; i++) {
  if (colAry[0][i] == max1) {
    console.log(i);
    first.push(i);
  }
}


const maxFunc2 = (num,j) => {
  let test = [];
  let A = colAry[num].slice(j - 1, j + 2);
  let max = Math.max(...A);
  let B = [];
  for (let i = 0; i < 3; i++){
    if (A[i] == max) test.push(j + i -1);
  }
  B.push(max);
  B.push(test);
  return B;
}

console.log(maxFunc2(1, 2));
sum += max1;

for (let i = 1; i < first.length; i++){
  let num = colAry[1][first[i]];
  console.log(maxFunc2(2, num))
  let AAA = maxFunc2(2, num);
  
}



