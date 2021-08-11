const menuitem = document.getElementsByClassName('menuitem')
// console.log(menuitem)
for (let i = 0; i < menuitem.length; i++) {
  console.log(i)
  menuitem[i].addEventListener('mouseenter', function (e) {
    e.target.classList.add('enter')
  })
  menuitem[i].addEventListener('mouseleave', function () {
    this.classList.remove('enter')
  })
}
