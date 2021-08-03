///只有輸出
function display(x,y,z){
  console.log(x)
  console.log(y)
  console.log(z)
}

///累加
function sum(a,b,callback){
  callback(a,b,a+b)
  
}
// 
//最後輸出結果
//1.先做sum ，等sum做完，在做sum裡面的callbak
//2.sum執行形式參數a=1,b=2,a+b=3 ，等做完後再執行callback
//3.callback=(1,2,3)，也就是說display的argment參數=(1,2,3)，放進去display後印出來變x=1 y=2 z=3
console.log(sum(1,2,display))
//簡單來說就是當我執行sum的1和2時才會觸發執行display