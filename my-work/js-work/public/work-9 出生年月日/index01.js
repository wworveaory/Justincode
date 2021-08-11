let yearitem = '0'
let monthitem = '0'
let dateitem = '0'

// -------------------------------------------------
//寫成小函式 for迴圈 更都 數字的2個值
function abc(x, y) {
  // let Option1 = '<option value="0">請選擇</option>'
  let number = []
  for (let i = x; i < y + 1; i++) {
    number.push(i)
  }
  return (
    '<option value="0">請選擇</option>' +
    number
      .map((v) => {
        ;`<option value="${v}">${v}</option>`
      })
      .join('')
  )
}
// --------------年------------------
const year = document.getElementById('year')
year.innerHTML = abc(1994, 2021)

year.addEventListener('change', () => {
  yearitem = year.value
  console.log(year.value)
})
// --------------月份------------------
const month = document.getElementById('month')
month.innerHTML = abc(1, 13)

month.addEventListener('change', () => {
  monthitem = month.value
  console.log(month.value)
  if (yearitem !== '0' && monthitem !== '0') {
    date.disabled = false
  }
  ///尋找某年某月有幾天
  let datedays = new Date(1994, 6, 0).getDate()
  console.log(datedays)

  date.innerHTML = abc(1, datedays)
})
// --------------日------------------
const date = document.getElementById('date')
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
