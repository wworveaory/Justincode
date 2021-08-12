const tableitem=document.getElementById('tableitem')
let str = `"國文","英文","樹協","自然"
"黃聰明",90,60,77 
"梁月娥",80,70,60`
// console.log(str);
//轉成3ㄍ陣列
const words = str.split('\n');
// console.log(words);
//1.取出第0筆陣列 
//2.replaceAll意思是把 目前現有"的東西用空值取代
//3.//再區分成4個陣列 這樣陣列就會比較乾淨 
let headings=words[0].replaceAll('"','').split(',')
console.log(headings); 
let thitem=""

for(let i=0;i<headings.length;i++){
	thitem+=`<th>${headings[i]}</th>`
}
tableitem.innerHTML=`<tr>${thitem}</tr>`
