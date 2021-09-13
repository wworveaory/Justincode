const inputText = document.getElementById('inputText')
const addBTN = document.getElementById('addBTN')
let todoData = []
//新增
//1.使用者點擊addBTN的click事件後，才會執行addTodo的function
//2.在addTodo的function裡面設定 let todo的物件，物件裡包含取得使用者輸入的txt.id.checked
//3.在用判斷式判斷當使用者輸入的值不是空的時候，就會把預設的todoData的空陣列加上 todo物件，以及在把入的值清空
//4.得到這些值時必須要渲染才會到網頁上，因此在呼叫一個render()的function，而render()的()裡面要加上todoData，todoData裡面是陣列+使用者輸入的物件值

addBTN.addEventListener('click', addTodo)

function addTodo() {
  let todo = {
    txt: inputText.value,
    id: new Date().getTime(),
    checked: '',
  }
  if (todo.txt != '') {
    todoData.unshift(todo)
    console.log(todoData)
    inputText.value = ''
  }
  render(todoData)
}
//渲染
// 1.先綁定一個把定一個<ul>的id，因為等一下要在裡面加上子層的結構
//2.建立一個render()的function，而()裡面要加上預設arr的參數，這個預設參數之後被render(todoData)的todoData給取代
//3.要先預想render(todoData)的todoData已經帶值進來了，並設定str=''空字串 這是等等要接收所有使用者資料轉換過的內容
//4.參數也可以跑回圈，因為參數得出來的內容和一般的變數直腸數值是一樣的
const todoList = document.getElementById('todoList')
function render(arr) {
  let str = ''
  arr.forEach((i) => {
    str += `<li data-id='${i.id}'>
        <label class="checkbox" for="">
            <input type="checkbox" ${i.checked}/>
            <span>${i.txt}</span>
        </label>
        <a href="#" class="delete"></a>
    </li>`
  })
  todoList.innerHTML = str
}
