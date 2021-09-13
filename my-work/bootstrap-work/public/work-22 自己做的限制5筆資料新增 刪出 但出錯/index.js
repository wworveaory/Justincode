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
const delOneItem = document.getElementsByClassName('delOneItem') ///這是一個食物的函式
/////////////////刪除一筆資料

function food() {
  let banana = {
    user: userText.value,
    number: 1,
    name: '乖孫牌',
    price: 400,
    date: new Date().getMonth() + 1 + '月' + (new Date().getDate() + 1 + '號'),
  }
  // if (takeitem.length < 6) {
  //   takeitem.unshift(banana)
  // }
  // if (takeitem.length == 6) {
  //   takeitem.pop()
  // }
  if (banana.user != '') {
    takeitem.unshift(banana)
  }
  // takeitem.unshift(banana)
  userText.value = ''
  let str = ''
  for (let i = 0; i < takeitem.length; i++) {
    str += `
    <div class='d-flex'> 
    <div class='col-10'>目前訂單內容:${takeitem[i].user}，號碼牌為${takeitem[i].number}，訂了${takeitem[i].name}的香蕉，價格為${takeitem[i].price}，訂貨日期為${takeitem[i].date}</div>
    <div class='col-2'> <button class='ml-auto delOneItem' type="button">刪除</button></div>
    </div>
    <hr>`
  }

  console.log(delOneItem.length)
  delOneItem.addEventListener('click', function () {
    for (let i = 0; i < delOneItem.length; i++) {
      console.log(i)
    }
  })
  text.innerHTML = str
}

//我做了一個新增資料的功能了，然後我現在刪除功能卡住，我的新增功能是用addEventListener('click')方式點選新增的button新增的，點選後畫面會顯現資料和刪除的button，而刪除功能我也是用addEventListener('click')方式點刪除的button刪除，我要透過點選刪除的button刪除一筆之前新增時顯示的資料，但是結果出錯了，他出現delOneItem.addEventListener is not a function at food (index.js:45) at HTMLButtonElement.<anonymous> 的錯誤
