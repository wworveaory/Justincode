const changeItem=document.getElementsByClassName('changeItem')
const changeImg=document.getElementById('changeImg')
const cardtitle=document.querySelector('.card-title')
const cardtext=document.querySelector('.card-text')

let myfalse=true;
// console.log(changeiItem.length)
for(let i=0;i<changeItem.length;i++){ 
    changeItem[i].addEventListener('click',function(){
    
    
        if(i===0){
            console.log('1')
            changeImg.innerHTML=`<img class="card-img-top" src="https://upload.cc/i1/2021/08/26/51gKr7.jpg" alt="Card image cap">`;
            cardtitle.innerHTML=`第一頁`;
            cardtext.innerHTML=`第一頁 群走路群走路群走路群走路群走路群走路群走路群走路群走路群走路群走路`;
            this.classList.add("myDisable")
            changeItem[1].classList.remove("myDisable")
            changeItem[2].classList.remove("myDisable")
        }
        if(i===1){
            console.log('2')
      
            changeImg.innerHTML=`<img class="card-img-top" src="https://upload.cc/i1/2021/08/26/uFzPn1.jpg" alt="Card image cap">`
            cardtitle.innerHTML=`第二頁`
            cardtext.innerHTML=`顏色好漂亮 顏色好漂亮顏色好漂亮顏色好漂亮顏色好漂亮顏色好漂亮顏色好漂亮`
            this.classList.add("myDisable")
            changeItem[0].classList.remove("myDisable")
            changeItem[2].classList.remove("myDisable")
    
         
        }
        if(i===2){
            console.log('3')
            changeImg.innerHTML=`<img class="card-img-top" src="https://upload.cc/i1/2021/08/26/4XaQh1.jpg" alt="Card image cap">`
            cardtitle.innerHTML=`第三頁`
            cardtext.innerHTML=` 貓咪好可愛貓咪好可愛貓咪好可愛貓咪好可愛貓咪好可愛貓咪好可愛貓咪好可愛貓咪`  
            this.classList.add("myDisable")
            changeItem[0].classList.remove("myDisable")
            changeItem[1].classList.remove("myDisable")

        
        }
    })     
        
    


}

    
   