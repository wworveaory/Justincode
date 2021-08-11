const yearAndMonth = document.getElementById('yearAndMonth')
const title = document.getElementById('title')
const tbodyitem = document.getElementById('tbodyitem')

//目前月份日曆
let CurrentlyNewDate = new Date()
let CurrentlyGetYear = CurrentlyNewDate.getFullYear()
// console.log(CurrentlyGetYear)
let CurrentlyGetMonth = CurrentlyNewDate.getMonth() + 1
// console.log(CurrentlyGetMonth)
let CurrentlyGetDate = CurrentlyNewDate.getDate()
// console.log(CurrentlyGetDate)

yearAndMonth.innerHTML = `目前時間為:${CurrentlyGetYear}/${CurrentlyGetMonth}/${CurrentlyGetDate}`

// 呈現標題
let weekDayList = ['日', '一', '二', '三', '四', '五', '六']
let weekDayitem = ""
for(let i =0;i<weekDayList.length;i++){
	weekDayitem+=`<th>${weekDayList[i]}</th>`
}
title.innerHTML=`<tr>${weekDayitem}</tr>`
//forEach 語法
// let weekDayitem = ""
// weekDayList.forEach((v) => {
//             weekDayitem += `<th>${v}</th>`
//             title.innerHTML = `<tr>${weekDayitem}</tr>`
//         })
//map 語法
// let weekDayitem = weekDayList.map((v) => {
//            return`<th>${v}</th>`
//         }).join('')
//  title.innerHTML = `<tr>${weekDayitem}</tr>`
// ------------------------------------------------------------------------------------------
//本月有幾天
const days=new Date(CurrentlyGetYear,CurrentlyGetMonth,0).getDate()
console.log(days)
// //目前星期幾
// let CurrentlyGetDay = CurrentlyNewDate.getDay()
// console.log(CurrentlyGetDay)

//這個第一天是星期幾(0-6)(月份為0-11)
const firstDay=new Date(CurrentlyGetYear,CurrentlyGetMonth-1,1).getDay()
console.log(firstDay)

//本月所有日期陣列資料 
let date=[]

//補前空白資料
for(let i=1;i<firstDay;i++){
	date.push('')
	console.log(date)
}

//加入本月所有資料
for(let i=1;i<days;i++){
	date.push(i+1)
	// console.log(date)
}

//準備呈現在網頁上
let dayDisplay=''
for(let i=1;i<date.length;i++){
	dayDisplay+=`<td>${date[i]}</td>`
	if((i+1)%7===0){
		dayDisplay+='</tr><tr>'
	}
}

tbodyitem.innerHTML=`<tr>${dayDisplay}</tr>`