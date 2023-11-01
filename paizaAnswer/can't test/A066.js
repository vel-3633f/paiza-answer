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

let maxDay = 0;
let sum = 0;
let day = [];

for (let i = 0; i < n; i++) { 
  let A = a[2 * i];
  let B = a[2 * i + 1];
  for (let j = A; j <= B; j++){
    day.push(j);
  }
}

let f = function (a, b) {
  return a - b; 
}

let newDay = Array.from(new Set(day)).sort(f);

for (let i = 0; i < newDay.length; i++){
  if (newDay[i + 1] - newDay[i] == 1) {
    sum += 1;
    if (maxDay <= sum) maxDay = sum;
  } else {
    if (maxDay <= sum) maxDay = sum;
    sum = 0;
  }
}
console.log(maxDay+1);

