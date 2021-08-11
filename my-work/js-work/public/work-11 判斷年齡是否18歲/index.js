let yearitem = '0'
let monthitem = '0'
let dateitem = '0'
//超級大重點
//若是常數套callbackfunction事件(例如'click'或'change')，他們在裡面求到的變數和值可以互相傳遞!!!!!這個超重要的，就算在不同事件中也是可以傳遞，原因是因為我們有先在去域變數中定義'0'，因此能傳遞!!，但是他不能拿出去全域外面了，但callbackfunction的值沒辦法傳出去外面!!

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

year.innerHTML = abc(1994, 2021)
// // console.log(yearOption)

// //當點選下拉選單時取值
year.addEventListener('change', function () {
  yearitem = year.value
  // console.log(yearitem)
})

// --------------月份------------------
const month = document.getElementById('month')

month.innerHTML = abc(1, 12)

month.addEventListener('change', function () {
  monthitem = month.value
  // console.log(monthitem)

  if (yearitem !== '0' && monthitem !== '0') {
    date.disabled = false
  }
  ///尋找某年某月有幾天
  let datedays = new Date(1994, 6, 0).getDate()
  // console.log(datedays)

  date.innerHTML = abc(1, datedays)
})

// --------------日------------------
const date = document.getElementById('date')

date.innerHTML = abc(1, 31)
date.addEventListener('change', function () {
  dateitem = date.value
  // console.log(dateitem)
})

// ----------------------------------------------------
console.log(yearitem)
//判斷是否有18歲 ---------------------------------------------
const checkAge = document.getElementById('checkAge')
const message = document.getElementById('message')
//當點擊button觸發以下事件 做出使用者是否大於18歲
checkAge.addEventListener('click', function () {
  // console.log(yearitem) 證明可以將其他地方的callback值傳入其他callback 函式

  //1. ------------------------------------------------------------------------------
  //建立新currentlyNewDate 目前時間
  let currentlyNewDate = new Date()
  console.log(currentlyNewDate)
  //抓目前的年份
  let currentlyGetYear = currentlyNewDate.getFullYear()

  console.log(currentlyGetYear)
  //抓取目前月 記得加1 你忘了+1了....這裡很重要因為索引式0~11 所必須+1
  let currentlyGetMonth = currentlyNewDate.getMonth() + 1

  // console.log(currentlyGetMonth)
  //抓取目前日
  let currentlyGetDate = currentlyNewDate.getDate()
  console.log(currentlyGetDate)
  // ---------------------------------
  //新的date幫剛剛球道的年月日變數丟進來
  // let newdays = new Date(currentlyGetYear, currentlyGetMonth, currentlyGetDate)
  // console.log(newdays)
  // -----------------------------------------------------------------------------------------
  //2.拿之前下拉選單選擇的值拿來比較目前的年齡比較是否大於18歲
  console.log(yearitem)
  console.log(monthitem) //8
  console.log(dateitem)
  ///
  ///接下來用三元運算子的判斷，預設為false，等到預設為true時出現'您大於18歲'，如果還是false就是'未滿18'
  let isOver18 = false

  if (currentlyGetYear - yearitem > 18) isOver18 = true
  if (currentlyGetYear - yearitem === 18 && currentlyGetMonth > monthitem)
    isOver18 = true
  if (
    currentlyGetYear - yearitem === 18 &&
    currentlyGetMonth === monthitem &&
    currentlyGetDate - dateitem > 0
  )
    isOver18 = true
  message.innerHTML = isOver18
    ? '<span style="color:green">您大於18歲</span>'
    : '<span style="color:red">未滿18</span>'
})

//測試用對照newdays 測試他值事後正確
// let newdayss = new Date()
// console.log(newdayss)
