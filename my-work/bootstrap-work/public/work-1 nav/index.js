const hambergerclick = document.getElementById('hambergerclick')
const aa = document.getElementById('aa')
let x=0
hambergerclick.addEventListener('click',function(){
    // aa.style.display='none'

    if(x%2==0){
        aa.style.display='block'
        x++
        console.log(x)
    }else{
        aa.style.display='none'
        x++
        console.log(x)
    }
})