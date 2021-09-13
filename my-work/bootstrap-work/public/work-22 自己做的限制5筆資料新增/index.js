const addBtn = document.getElementById('addBtn')
const text = document.getElementById('text')
const userText = document.getElementById('userText')

// ----------------------------------這是新增-----------------------------------
//用空陣列去接食物function的值
let takeitem = []
//這是callback function 典籍按鈕進去才會執行函式內容
addBtn.addEventListener('click', function () {
  food()
})

///這是一個食物的函式
function food() {
  let banana = {
    user: userText.value,
    number: 01,
    name: '乖孫牌',
    price: 400,
    date: new Date().getMonth() + 1 + '月' + (new Date().getDate() + 1 + '號'),
  }
  if (takeitem.length < 6) {
    takeitem.unshift(banana)
  }
  if (takeitem.length == 6) {
    takeitem.pop()
  }
  userText.value = ''
  let str = ''
  for (let i = 0; i < takeitem.length; i++) {
    str += `目前訂單內容:${takeitem[i].user}，號碼牌為${takeitem[i].number}，訂了${takeitem[i].name}的香蕉，價格為${takeitem[i].price}，訂貨日期為${takeitem[i].date}<hr>`
  }
  text.innerHTML = str

  // takeitem.forEach((v) => {
  //   str += `目前訂單內容:${v.user}，號碼牌為${v.number}，訂了${v.name}的香蕉，價格為${v.price}，訂貨日期為${v.date}<hr>`
  //   text.innerHTML = str
  // })
  //錯誤 text.innerHTML += `目前訂單內容:${takeitem[0].user}，號碼牌為${takeitem[0].number}，訂了${takeitem[0].name}的香蕉，價格為${takeitem[0].price}，訂貨日期為${takeitem[0].date}<hr>`

  // --------------------------當比數大於六筆就會移除最底下的一筆資料!!!!!---------------------------------------
  //   for (let i = 0; i < takeitem.length; i++) {
  //     if (i > 6) {
  //       takeitem.pop()
  //     }
  //   }
}
