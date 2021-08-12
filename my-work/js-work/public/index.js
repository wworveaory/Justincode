//把js直轉成json字符串
// const aObj = { a: '你好', b: '我好', c :123 }
// let aJson = JSON.stringify(aObj)
// console.log(aJson);



//把json格式轉成字串
// const ajson='{"a":"dfe","c":"要確定"}'
// let k=JSON.parse(ajson)
// console.log(k);
// const jsonB = '{"ee":"帥哥","a":"醜歌","d":"太帥哥"}'
// let c = JSON.parse(jsonB)
// console.log(c)

// 混合格式
//先把他轉成json 在再轉成物件
// let remix ={a="我好喔", b="你好喔"}

// let remixB=JSON.parse(JSON.stringify(remix))
// console.log(remixB);

// ------------------------------------------------------
//淺拷貝
// let remix ={a:"我好喔", b:"你好喔",c:"我好喔",d:"他好喔"}
// let y=Object.assign({},remix)
// console.log(y);


// -----物件轉陣列-=============
// let aObject={a:'想黃',b:'小白',c:'想綠',d:'小乖'}
// //將物件的key值轉成陣列
// let aArray=Object.keys(aObject)
// console.log(aArray);
// //將陣列轉字串
// let d =aArray.join('')
// console.log(d);
// --------------------------------------------------
// let aObject={a:'想黃',b:'小白',c:'想綠',d:'小乖'}
// ///淺拷貝
// let i =Object.assign({},aObject)
// console.log(i);
// ///淺拷貝
// let cc={...aObject}
// console.log(cc);
//物件轉json格式
// let b=JSON.stringify(aObject)
// console.log(b);
// --------------------------------------------
//json 轉物件

// let aJson='{"a":"乖","b":"孫","c":"在","d":"嗎"}'
// let aObject=JSON.parse(aJson)
// console.log(aObject);
// -------------------------------------------------
const aa=document.getElementById('aa')
let aJson='{"a":"乖","b":"孫","c":"在","d":"嗎"}'
//json轉物件
let aObject=JSON.parse(aJson)
console.log(aObject);
//再取key值 
let array=Object.keys(aObject)
console.log(array);
// 先將物件變成陣列
let str=""
array.forEach(function(v){
    str+=`${v}`
})
console.log(str);
aa.innerHTML=str