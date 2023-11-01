const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[Y,M,D]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
);

console.log(Y + '/' + M + '/' + D);


// 質問です。
const text='iii'
console.log(text + '\naaa' );
// 以上のように「\n」を使って、改行する方法はわかりました。昨日の授業で言っていた「\n」を使わないで改行する方法が知りたいです。