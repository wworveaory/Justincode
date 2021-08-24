const f =document.querySelectorAll('tbody tr')

for(let i=0;i<f.length;i++){
    console.log(i)
    f[i].addEventListener('mouseenter',function(e){
        console.log(e.target)
        e.target.classList.add('cc')
    
        // this.classList.add('cc')

    })
    f[i].addEventListener('mouseleave',function(e){
        console.log(e.target)
        e.target.classList.remove('cc')
        // this.classList.remove('cc')
   
    })

    
}