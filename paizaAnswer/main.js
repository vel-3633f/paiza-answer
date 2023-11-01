/* 0から 10未満の整数の中で偶数だけを小さい順から文字列で出力

let answer = '';
for (let i = 0; i < 10; i++){
  if (i % 2 == 0) answer = answer + i;
}
console.log(answer);



// 0から10まで奇数の和
let ans = 0;
for (let i = 0; i <= 10; i++){
  if (!(i % 2==0)) ans = ans + i;
}
console.log(ans);


// 'hello world' ひっくり返す

let a = 'hello world',ans='';

for (let i = 0; i < a.length; i++){
  ans = ans + a[a.length - 1 - i];
}
console.log(ans);


//while文だけ使って0から１０未満の整数の中で奇数だけを大きい順で出力

let i = 9;
while (i >= 0) {
  if(i%2)console.log(i);
  i--;
}
*/
for (let i = 1; i <= 31; i++){
  console.log(i);
}