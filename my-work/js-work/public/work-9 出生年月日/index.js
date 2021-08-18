// let coffee = document.getElementById('coffee')
//查看select 裡面的value值
// let selectedValue = 0
// coffee.addEventListener('change', () => {
//   selectedValue = coffee.value
//   console.log(coffee.value)
// })
let yearitem = '0'
let monthitem = '0'
let dateitem = '0'

// -------------------------------------------------
//寫成小函式 for迴圈 更都 數字的2個值
function abc(x, y) {
  let Option1 = '<option value="0">請選擇</option>'
  for (let i = x; i < y + 1; i++) {
    Option1 += `<option value=${i}>${i}</option>`
  }
  return Option1
}
// --------------年------------------
const year = document.getElementById('year')
// 相當於請選擇

// let Option1 = '<option value="0">請選擇</option>'

// // ///把回圈放進下拉選單裡面
//再把迴圈的索引值 i 放進裡面
// for (let i = 1912; i < 2021; i++) {
//   yearOption += `<option value=${i}>${i}年</option>`
// }
// abc(1994, 2021) //呼叫函式不該放這裡要記住 呼叫函式不要放在全域裡面

year.innerHTML = abc(1994, 2021)
// // console.log(yearOption)

// //當點選下拉選單時取值
year.addEventListener('change', () => {
  yearitem = year.value
  console.log(year.value)
})

// --------------月份------------------
const month = document.getElementById('month')

// let monthitem = '<option value="0">請選擇</option>'

// for (let i = 1; i < 13; i++) {
//   monthitem += `<option value=${i}>${i}月</option>`
// }
//month.innerHTML = monthitem
// abc(1, 13)  //呼叫函式不該放這裡又記住 呼叫函式不要放在全域裡面

month.innerHTML = abc(1, 13)

month.addEventListener('change', () => {
  monthitem = month.value
  console.log(month.value)
  if (yearitem !== '0' && monthitem !== '0') {
    date.disabled = false
  }
  ///尋找某年某月有幾天
  let datedays = new Date( yearitem, monthitem, 0).getDate()
  console.log(datedays)

  date.innerHTML = abc(1, datedays)
})

// --------------日------------------
const date = document.getElementById('date')

// let dateitem = '<option value="">請選擇</option>'

// for (let i = 0; i < 32; i++) {
//   dateitem += `<option value=${i}>${i}</option>`
// }
//date.innerHTML = dateitem
// abc(1,32)  //呼叫函式不該放這裡又記住 呼叫函式不要放在全域裡面
date.innerHTML = abc(1, 32)
date.addEventListener('change', () => {
  dateitem = date.value
  console.log(date.value)
})

// ------------------------------------------------------
// 我寫函式遇到的問題
// 1.預設的值沒加進函式中:let Option1 = '<option value="0">請選擇</option>'
// 2.少了return 回傳值
//3.函式呼叫的地方錯了一直放在全域裡呼叫，因此同名不同參數值的函式一呼叫時，資料內容就會一直疊加
//3.解決方式就是加函示放進 指定物件的.innerHTML 裡面!!  就能讓資料不會疊加
//3.呼叫函式不該放這裡又記住 呼叫函式不要放在全域裡面

// ---------------------------------------------
