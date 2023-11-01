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
console.log(a.join("\n"));
for (let i = 0; i < n; i++) {
  a[i] = a[i].toString();
}

function right(h, w) {
  //up=true,down=false
  let upDown = true;
  let beforeUpDown = true;
  let sum = 0;
  for (let i = w + 1; i < n; i++) {
    sum++;

    if (a[h][i] - a[h][i - 1] === 1) {
      upDown = false;
      if (i === w + 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else if (a[h][i] - a[h][i - 1] === -1) {
      upDown = true;
      if (i === w + 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else {
      return sum;
    }
  }
}

function left(h, w) {
  //up=true,down=false
  let upDown = true;
  let beforeUpDown = true;
  let sum = 0;
  for (let i = w - 1; i >= 0; i--) {
    sum++;
    console.log(i);
    if (a[h][i] - a[h][i + 1] === 1) {
      upDown = false;
      if (i === w - 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else if (a[h][i] - a[h][i + 1] === -1) {
      upDown = true;
      if (i === w - 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else {
      return sum;
    }
  }
}
function top(h, w) {
  //up=true,down=false
  let upDown = true;
  let beforeUpDown = true;
  let sum = 0;

  console.log(a[h][w]);
  for (let i = h - 1; i >= 0; i--) {
    sum++;
    // console.log(`a=${a[i][w]},i=${i}`);
    if (a[i][w] - a[i + 1][w] === 1) {
      upDown = false;
      if (i === h - 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else if (a[i][w] - a[i + 1][w] === -1) {
      upDown = true;
      if (i === h - 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else {
      return sum;
    }
  }
}
function bottom(h, w) {
  //up=true,down=false
  let upDown = true;
  let beforeUpDown = true;
  let sum = 0;

  console.log(a[h][w]);
  for (let i = h + 1; i < n; i++) {
    sum++;
    // console.log(`a=${a[i][w]},i=${i}`);
    if (a[i][w] - a[i - 1][w] === 1) {
      upDown = false;
      if (i === h + 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else if (a[i][w] - a[i - 1][w] === -1) {
      upDown = true;
      if (i === h + 1) beforeUpDown = upDown;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
    } else {
      return sum;
    }
  }
}
function rightBottom(h, w) {
  //up=true,down=false
  let upDown = true;
  let beforeUpDown = true;
  let sum = 0;
  let count = w + 1;
  console.log(a[h][w]);
  for (let i = h + 1; i < n; i++) {
    sum++;
    console.log(`a=${a[i][count]},i=${i},j=${count}sum=${sum}`);
    if (a[i][count] - a[i - 1][count - 1] === 1) {
      upDown = false;
      if (i === h + 1) beforeUpDown = upDown;
      console.log(`sum=${sum}`);
      if (i === n - 1 || count === n - 1) return sum++;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
      console.log(`sum=${sum}`);
    } else if (a[i][count] - a[i - 1][count-1] === -1) {
      upDown = true;
      if (i === h + 1) beforeUpDown = upDown;
      console.log(`sum=${sum}`);
      if (i === n - 1 || count === n - 1) return sum++;
      if (upDown !== beforeUpDown) {
        return sum;
      }
      beforeUpDown = upDown;
      console.log(`sum=${sum}`);
    } else {
      return sum;
    }
    count++;
    if (count == 4) break;
  }
}
function rightTop(h, w) {
  //up=true,down=false
  let upDown = true;
  let beforeUpDown = true;
  let sum = 0;

  console.log(a[h][w]);
  for (let i = h - 1; i >= 0; i--) {
    sum++;
    console.log(`a=${a[i][w]},i=${i}`);
    // if (a[i][w] - a[i + 1][w] === 1) {
    //   upDown = false;
    //   if (i === h - 1) beforeUpDown = upDown;
    //   if (upDown !== beforeUpDown) {
    //     return sum;
    //   }
    //   beforeUpDown = upDown;
    // } else if (a[i][w] - a[i + 1][w] === -1) {
    //   upDown = true;
    //   if (i === h - 1) beforeUpDown = upDown;
    //   if (upDown !== beforeUpDown) {
    //     return sum;
    //   }
    //   beforeUpDown = upDown;
    // } else {
    //   return sum;
    // }
  }
}


// console.log(`sum=${left(2, 3)}`)
// console.log(`sum=${right(3, 1)}`)
console.log(`sum=${rightBottom(0, 0)}`);
