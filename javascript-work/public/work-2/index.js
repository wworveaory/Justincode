///選取全部基數的元素套用css
//1.抓取基數的dom元素裡面的li元素裡面的基數，
//2.抓到2個以上的元素，要使用他時必須要跑迴圈!
let ham = document.querySelectorAll('li:nth-child(even)')

// ham[2].style.background = 'red'
let c = ham.length
console.log(c)
//套用全部的css 必須跑迴圈
for (let i = 0; i <= c; i++) {
  ham[i].style.background = 'red'
}
