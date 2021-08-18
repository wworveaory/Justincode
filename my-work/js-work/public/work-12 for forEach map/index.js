const tbodyitem = document.getElementById('tbodyitem')
let date = ['1fvfdvfd', '2vfdvdf', 'vf3', 'ddd4']
//for迴圈方法
// let dateitem = ''
// for (let i = 0; i < date.length; i++) {
//     // console.log(date[i])
//     dateitem += `<th>你好${date[i]}</th>`
//     tbodyitem.innerHTML = `<tr>${dateitem}</tr>`
// }

//forEach迴圈方法
// date.forEach((v) => {

//     dateitem += `<th>你好${v}</th>`
//     tbodyitem.innerHTML = `<tr>${dateitem}</tr>`
// })


//Map迴圈方法
// let c =date.map((v) => {
//     return`<th>你好${v}</th>`
// }).join('')
// tbodyitem.innerHTML = `<tr>${c}</tr>`


///
let bb=date.filter((v)=>{
    return v.length>6
})
console.log(bb)
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
