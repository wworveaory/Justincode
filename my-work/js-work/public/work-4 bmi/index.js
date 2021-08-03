const kgitem = document.getElementById('kgitem')
const mitem = document.getElementById('mitem')
const countbtn = document.getElementById('countbtn')
const total = document.getElementById('total')

countbtn.addEventListener('click',function(){
  let kg = kgitem.value
  let m = mitem.value
  //身高變平方公尺
  let mm=kg/Math.pow(m/100,2)
  //換算成bmi
  total.innerText=mm.toFixed(2)  
})
