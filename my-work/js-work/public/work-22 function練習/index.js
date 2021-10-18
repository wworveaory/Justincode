const humber=document.getElementById('humber')
const cocoa=document.getElementById('cocoa')
const all=document.getElementById('all')
const btn=document.getElementById('btn')
const text=document.getElementById('text')

function ttt(humberprice,cocoaprice){
    console.log(humber.value)
    console.log(cocoa.value)
    let humbercount=humber.value
    let cocoacount=cocoa.value
    let allcount=((+humbercount)*humberprice)+((+cocoacount)*cocoaprice)
    console.log(allcount)
    let allagain=allcount
    all.innerText=allagain
   

}
function aaa(){
    let d='你好你想來說迷'
    text.textContent=d
    
}
btn.addEventListener('click',function(){
   ttt(50,10)
   //漢堡50 可樂10
})


aaa()