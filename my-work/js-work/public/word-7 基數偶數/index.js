// for (let i = 1; i < 10; i++) {
//   for (let c = 1; c < 10; c++) {
//     console.log(i + 'x' + c + '=' + i * c)
//   }
// }

//偶數
//在if裡要善用for迴圈
//餘數後面要有明確的值 ，例如等於多少
// for (let b = 1; b < 10; b++) {
//   if ((b + 1) % 2 === 0) continue
//   console.log(b)
// }

//基數
//在if裡要善用for迴圈
//餘數後面要有明確的值 ，例如等於多少
for (let b = 0; b < 100; b++) {
  if (b + 1 === 50) break
  if (b + 1 === 6) continue
  if ((b + 1) % 2 === 1) continue

  console.log(b)
}
