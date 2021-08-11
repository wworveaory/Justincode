let driceIcon = document.getElementById('driceIcon')
let driceCount = document.getElementById('driceCount')

let start = document.getElementById('start')

start.addEventListener('click', function () {
  //1.要使用隨機數api，產生1~6的隨機數，必須用一個變數去接
  //2.建立一個空的變數，這個變數之後接的值，是為了更改fontawesome的名子，更改名子甩子圖片才會換
  let random = Math.floor(Math.random() * 6) + 1
  let driceType = ''
  //3.用 random隨機數來判斷目前隨機數字是多少，並重新給予driceType的值
  switch (random) {
    case 1:
      driceType = 'one'
      break
    case 2:
      driceType = 'two'
      break
    case 3:
      driceType = 'three'
      break
    case 4:
      driceType = 'four'
      break
    case 5:
      driceType = 'five'
      break
    case 6:
      driceType = 'six'
      break
  }
  //4.用driceIcon去接值
  driceIcon.innerHTML = `<i class="fas fa-dice-${driceType}"></i>`
  driceCount.innerText = random + '點'
})
