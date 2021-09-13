const inputText = document.getElementById('inputText')
const addBTN = document.getElementById('addBTN')
let todoData = []

addBTN.addEventListener('click', function () {
  todoList()
})

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
