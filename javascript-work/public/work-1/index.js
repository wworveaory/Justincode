let ham = document.getElementById('ham')
let add = document.getElementById('add')
let sub = document.getElementById('sub')
// //設定一個常數，再利用這個id來得到dom裡面的元素傳值給常數
// //若要改變現在顯示的內容可用innerText(內部文字)，內部文字指定為新的
// // ham.innerText = 5
// // ham.textContent = 15155
// ham.addEventListener('click', function () {
//   ham.innerText = Number(ham.textContent) - 1
// })
let c = 5
add.addEventListener('click', function () {
  ham.innerText = +ham.innerText + c
})
sub.addEventListener('click', function () {
  ham.innerText = +ham.innerText - 1
})

// const ham = document.getElementById('ham')
// let c = '12assdwcdsqdwqbdqwdwdcddwe'
// console.log(c.slice(0, 2))

// ham.addEventListener('click', function () {
//   ham.innerHTML =
//     '<a href=https://www.google.com.tw/maps/@24.9827117,121.3792648,12z?hl=zh-TW&authuser=0>你好嗎google</a>'
// })

//透過2個button來控制+或-
