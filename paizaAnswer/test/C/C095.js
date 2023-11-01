const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s],[t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

let test = true;
if (s == t) {
  test = false;
}
else {
  for (let i = 0; i < s.length; i++){
    let moji = s.charAt(i);
    let countA = (s.match(new RegExp(moji, "g")) || []).length;
    let countB = ( t.match( new RegExp( moji, "g" ) ) || [] ).length ;
    if (countA !== countB) {
      test = false;
      break;
    }
  }
}
console.log(test ? 'YES' : 'NO');

