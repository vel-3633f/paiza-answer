const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n] = require("fs")
  .readFileSync(file, "utf8")
  .trim()
  .split("\n")
  .map((r) =>
    r
      .trim()
      .split(/\s+/)
      .map((i) => (isNaN(i) ? i : +i))
  );

const barcode = function (num) {
  let ary = [];
  switch (num) {
    case 0:
      ary.push("...");
      ary.push("...");
      ary.push("...");
      return ary;
    case 1:
      ary.push("#..");
      ary.push("...");
      ary.push("...");
      return ary;
    case 2:
      ary.push("##.");
      ary.push("...");
      ary.push("...");
      return ary;
    case 3:
      ary.push("###");
      ary.push("...");
      ary.push("...");
      return ary;
    case 4:
      ary.push("###");
      ary.push("#..");
      ary.push("...");
      return ary;
    case 5:
      ary.push("###");
      ary.push("##.");
      ary.push("...");
      return ary;
    case 6:
      ary.push("###");
      ary.push("###");
      ary.push("...");
      return ary;
    case 7:
      ary.push("###");
      ary.push("###");
      ary.push("#..");
      return ary;
    case 8:
      ary.push("###");
      ary.push("###");
      ary.push("##.");
      return ary;
    case 9:
      ary.push("###");
      ary.push("###");
      ary.push("###");
      return ary;
  }
};

// console.log(barcode(9));

n = n.toString();
// console.log(n);
// 123456

let ans = [];
let j = -1;
for (let i = 0; i < n.length; i++) {
  let barcodeAry = barcode(parseInt(n[i]));
  ans = ans.concat(barcodeAry);
  // console.log(barcodeAry[0]);
}
// console.log(ans, n.length / 3);
let barcodeAns = [];
for (let i = 0; i < parseInt(n.length / 3); i++) {
  barcodeAns.push(ans[0 + i * 9] + ans[3 + i * 9] + ans[6 + i * 9]);
  barcodeAns.push(ans[1 + i * 9] + ans[4 + i * 9] + ans[7 + i * 9]);
  barcodeAns.push(ans[2 + i * 9] + ans[5 + i * 9] + ans[8 + i * 9]);
}

console.log(barcodeAns.join('\n'));
// #..##.###
// .........
// .........
// #########
// #..##.###
// .........
