const inputText = document.getElementById('inputText')
const addBTN = document.getElementById('addBTN')
let todoData = []

addBTN.addEventListener('click', function () {
  todoList()
})
//物件的架構
function todoList() {
  let todoitem = {
    txt: inputText.value,
    id: new Date().getTime(),
    checked: '',
  }
  // console.log(todoitem)
  if (inputText.value != '') {
    todoData.unshift(todoitem)
    // console.log(todoData)
    inputText.value = ''
  }
  ///渲染函式
  render(todoData)
}

const ulList = document.getElementById('ulList')
function render(item) {
  // item.forEach((element) => {
  //   console.log(element)
  // })
  ////////////////////////////////
  // console.log(item)
  //拿一個空字串去渲染html畫面
  let text = ''
  item.forEach((i) => {
    text += `<li data-time=${i.id}>
      <label class="checkbox" for="">
          <input type="checkbox" ${i.checked} />
          <span>${i.txt}</span>
      </label>
      <a href="#" class="delete"></a>
  </li>`
  })
  // console.log(text)
  ulList.innerHTML = text
}

const tab = document.getElementById('tab')
//此為callback function 點擊後才會出現changeTabrg function
tab.addEventListener('click', changeTab)

//製作一個當滑鼠點擊後只會針對單一對象套用效果 的function
function changeTab(e) {
  console.log(e.target)
  // let togglestatus = 'all'
  // console.log(e.target.dataset)
  // console.log(e.target.dataset.tab)
  // togglestatus = e.target.dataset.tab
  // console.log(togglestatus)
  //////點擊後會先把所有的li清除掉
  let tabbs = document.querySelectorAll('#tab li')
  tabbs.forEach(function (v) {
    v.classList.remove('active')
  })
  /////之後再套用一個目前點擊的e.target事件目標
  e.target.classList.add('active')
  // togglestatus.classList.add('active')
}

///透抓取id 時間的id的值去去刪除資料
ulList.addEventListener('click', delOneList)
function delOneList(e) {
  // console.log(e.target.classList.value)
  //為什麼要用 let timeId = e.target.closest('li').dataset.time?我的理解是 因為目前的event的對象是在<ul>這層，因此點選時會出現<li>這層的資訊，<li>有設定.data-*的資訊，因此點選<ul>這層時會出現.data-time的資訊。但是如果點選<li>內層的<a>時，就不會出現data-time的資訊，因為<a>層沒有設定.data-*，因此點選<a>會出現undefined，因此當我們要點<a>層然後取得.data-time時，因為點選的<a>層位置在li裡面，因此要往上層找，所以要用closest往上層(li)找，這樣就等於在li層找的.data-time就找到了!!
  //html標籤的data-*
  let tId = e.target.closest('li').dataset.time

  if (e.target.classList.value == 'delete') {
    e.preventDefault()
    todoData = todoData.filter((i) => {
      // 拿html的<a>標籤的data-*的物件名稱和 todoData架構物件id物件名稱去做對應
      return i.id != tId
      // console.log(tId) //a標籤裡面的Data-*物件名稱
      // console.log(i.id) //目前全域todoData裡面的物件名稱
      // console.log(i) //目前全域todoData裡面的物件和值
    })
  }
  render(todoData)
  //最後還要重新更新一次
}
// <li data-time=${i.id}>
