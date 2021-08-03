const count = document.getElementById('count')
const usd = document.getElementById('usd')
const twd = document.getElementById('twd')
const total = document.getElementById('total')
///1.當使用這點擊後觸發click事件
///2.取得使用者輸入的數值再*幣值倍數
///2.改變total的值  total.innerText

// let countvalue = count.value
// console.log(countvalue)

// twd.addEventListener('click', function () {
//   total.innerText = (count.value * 28.53).toFixed(2)
// })
// usd.addEventListener('click', function () {
//   total.innerText = (count.value / 28.53).toFixed(2)
// })

///1.當使用這點擊後觸發click事件
///2.取得使用者輸入的數值再*幣值倍數，將數值傳給變數
///3.改變total的值=剛剛計算完的變數  total.innerText=totalanswer

usd.addEventListener('click', function () {
  //1.先運算好
  let totalanswer = +(count.value / 28.53).toFixed(2)
  //2.在呈現在網頁上
  total.innerText = '台幣轉美金' + totalanswer
})
twd.addEventListener('click', function () {
  let totalanswer = Number(count.value * 28.53).toFixed(0)
  total.innerText = '美金轉台幣' + totalanswer
})
