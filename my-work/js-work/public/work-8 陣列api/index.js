// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
// ------------------------------------------------------------------
//索引 搜尋索引值
// console.log(beasts.indexOf('duck'))

// const i = '1231321321312'
// console.log(i.indexOf(2))
// ------------------------------------------------------------------
//搜尋是不是陣列
// console.log(Array.isArray(beasts))
// ------------------------------------------------------------------
//擷取 淺拷貝
// console.log(beasts.slice(1, 4))
// const item = ['shoes', 'shirts', 'socks', 'sweaters']
// let b = item.slice(1, 3)
// console.log(b)
// ------------------------------------------------------------------
//元素連接 合併 ，回傳字串
// let c = beasts.join('+')
// console.log(c)
// let g = ['a', 'b', 'c', 'd']
// let c = g.join(',')
// console.log(c)
// ------------------------------------------------------------------
//會移除最後一個元素，也會改變陣列長度
// console.log(beasts.pop())
// console.log(beasts)
// console.log(beasts.length)
// ------------------------------------------------------------------
//會新增一個值到陣列最後面，也會改變陣列長度
// console.log(beasts.push('123'))
// console.log(beasts)
// ------------------------------------------------------------------
//split 用function做
// let aa = function (cc) {
//   let arr = cc.split('').reverse().join('')
//   return arr
// }
// ------------------------------------------------------------------

// const numArray = [1, 2, 3]
// //展開運算符 相等的作法
// const newArray2 = [...numArray]
// console.log(newArray2)
// --------------------------------------------------------------
// forEACH用法
// -----------------------------------------------------------
//forEach更改value值
// let data = [2, 3, 4, 5]
// data.forEach((value) => {
//   let c = value * value
// })
// ---------------------------------
// forEach更改總和

// let data = [2, 3, 4, 5]
// let d = 0
// data.forEach((value) => {
//   d += value
// })
// console.log(d)

// --------------------------------------------------------------
// var a = [1, 2, 3]
// let pp = a.forEach(function (entry) {
//   console.log(entry)
// })
// const array1 = ['a', 'b', 'c']

// array1.forEach((x) => console.log(x))
// array1.forEach(function (v) {
//   console.log(v)
// })
// --------------------------------------------------------------
// 1.設定一個陣列給 items常數
//2.在設定一個空陣列給copy個常數
// const items = ['item1', 'item2', 'item3']
// const copy = []
// //3.跑for回圈將items裡面的的內容顯示出來，之後用copy用push推送的方式去接值
// for (let i = 0; i < items.length; i++) {
//   // console.log(i)
//   copy.push(items[i])
// }
// //4.在外面印出來
// console.log(copy)
// -----------------------------------------------------------------
// const items = ['item1', 'item2', 'item3']
// const copy = []

// items.forEach((v) => {
//   // copy.push(v)
// })
// console.log(copy)

// const items = ['item1', 'item2', 'item3']
// const copy = []

// items.forEach(function (item) {
//   copy.push(item)
// })
// --------------------------------------------------
//展開運算子達到同樣效果
// let c = [...items]
// console.log(c)

// ------------------------------------------------------------
// let people = [
//   {
//     name: '小明',
//     money: 500,
//   },
//   {
//     name: '漂亮阿姨',
//     money: 3000,
//   },
//   {
//     name: '杰倫',
//     money: 60000,
//   },
// ]
// // 1.先跑for回圈 看索引值是否為0 1 2
// for (let p = 0; p < people.length; p++) {
//   // console.log(p)
//   // 2.將索引值套在一開始建立的people陣列裡，之後再用空的變數去接值
//   let student = people[p]
//   console.log(student.name)
//   // console.log(`最帥的${student.name}總共有${student.money}元`)
// }
// ----------------------------------------------------------------
// people.forEach((v, i) => {
//   let student = v
//   // console.log(v)
//   console.log(student.name)
// })
// +------------------------------------------------------------------
// arr = [1, 2, 3]
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }
// arr.forEach((item) => {
//   console.log(item)
// })
// -------------------------------------------------------------------
// ----------------------------------------------------\
// 傳統套函式的forEach
// function logArrayElements(element, index, array) {
//   console.log(element, index)
//   // console.log('a[' + index + '] = ' + element)
// }

// ;[2, 5, , 9].forEach(logArrayElements)

// ----------------------------------------------------------
// 箭頭函式的forEach

// const count = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//定義函式
// const a = (item, index) => {
//   //回傳出偶數值
//   if (index % 2 === 0) return
//   console.log(item)
// }
//呼叫函式
// count.forEach(a)
// -------------------------------------------
//定義函式
// const callback = (item, index) => {
//   // if (index % 2 === 0) return
//   console.log(item)
// }
//呼叫函式
// count.forEach(callback)
// -----------------------------------------------------------------------
// // 用函式的方式來做forEach
// //1.先設定一個空的變數，用意是之後會接收到完整值，之後要更改網頁內容的
// let text = ''
// //2.設定一組陣列，用一個變數接收
// const fruits = ['apple', 'orange', 'cherry']
// //3.建立函式
// function myFunction(v, i) {
//   text += i + ':' + v + '<br>'
// }
// //4.這是最後一個步驟，是要將fruits變數做forEach方法包住並呼叫myfunction
// fruits.forEach(myFunction)
// //

// console.log(text)

// --------------------------------------------------------------------
//只有value值不包含陣列框
// let arry = [1, 2, 3]
// arry.forEach((v, i) => {
//   console.log(v * 2)
//   // console.log(v)
// })

// -----------------------------------------------------------------------
///有index.arry.value 就會包含陣列框
// let arry = [1, 2, 3]
// arry.forEach((value, index, array) => {
//   array[index] = value + 1
// })
// console.log(arry)

// ----------------------------------------------------------------------
// let people = [
//   {
//     name: 'Jay',
//     like: 'apple',
//     gender: 'male',
//     age: 18,
//   },
//   {
//     name: 'Sarah',
//     like: 'banana',
//     gender: 'female',
//     age: 24,
//   },
//   {
//     name: 'Tom',
//     like: 'orange',
//     gender: 'male',
//     age: 1,
//   },
//   {
//     name: 'Jacy',
//     like: 'orange',
//     gender: 'female',
//     age: 3,
//   },
// ]

// people.forEach((v, i) => {
//   console.log(`${v.name}非常喜歡吃${v.like}`)
// })
// ------------------------------------------------------------------------
// map用法
//------------------------------------------------------------------------
// const array1 = [1, 4, 9, 16]

// const map1 = array1.map((x) => x * 2)

// console.log(map1)

// ------------------------------------------------------------------------------
//
// let arr = [1, 2, 3]
// const newArr = arr.map(function (value, index, array) {
//   return value * 3
// })
// console.log(newArr)
// -----------------------------------------------------------------
// let people = [
//   {
//     name: 'Jay',
//     like: 'apple',
//     gender: 'male',
//     age: 18,
//   },
//   {
//     name: 'Sarah',
//     like: 'banana',
//     gender: 'female',
//     age: 24,
//   },
//   {
//     name: 'Tom',
//     like: 'orange',
//     gender: 'male',
//     age: 1,
//   },
//   {
//     name: 'Jacy',
//     like: 'orange',
//     gender: 'female',
//     age: 3,
//   },
// ]
// let justin = people.map((v, i, a) => {
//   if (v.like == 'banana') {
//     return `${v.name}喜歡吃香蕉`
//   } else {
//     return `而${v.name}不喜歡喜歡香蕉`
//   }
// })
// console.log(justin)
// --------------------------------------------------------------------------
// var kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ]
// let c = kvArray.map((v) => {
//   let b = {}
//   b[v.key] = v.value
//   return b
// })
// console.log(c)
// var reformattedArray = kvArray.map(function (obj) {
//   var rObj = {}
//   rObj[obj.key] = obj.value
//   return rObj
// })
// console.log(reformattedArray)
// ---------------------------------------------------------------------------
//map 連鎖語法
// let A = [1, 2, 3, 4]
// let b = A.map((v) => {
//   return v + 100
// })
//   .map((v) => {
//     return v * 2
//   })
//   .map((v) => {
//     return v + 10000
//   })
// console.log(b)
// --------------------------------------------------------------------------
//會回傳一個 索引值
// let a = [1, 9, 7, 5, 6, 4, 7, 8, 22, 9, 6, 2, 444]
// let d = a.find((v) => {
//   return v > 22
// })
// console.log(d)
// *-------------------------------------------------------------
//找出於13的索引值
// const array1 = [5, 12, 8, 130, 44]
// let c = array1.findIndex((v) => {
//   return v > 13
// })
// console.log(c)
// --------------------------------------------------------------
// 以下範例為使用箭頭函式尋找水果的索引。
// const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit']
// let a = fruits.findIndex((v) => {
//   return v === 'blueberries'
// })
// console.log(a)
// -----------------------------------------------------------
//incluses是否存在
// let str = 'Hello world, welcome to the universe.'
// let d = str.includes('Hell')
// console.log(d)
// ----------------------------------------------------
//filter 過濾
// let aArray = [1, 3, 5, 7, 10, 22]
// let b = aArray.filter((v) => {
//   return v !== 5
// })
// console.log(b)
// let bArray = []
// for (let i = 0; i < aArray.length; i++) {
//   if (aArray[i] === 22) continue
//   bArray.unshift(aArray[i])
// }
// console.log(bArray)
// -----------------------------------------------------------------
// 沒有給參數的預設排序
// const arr = [5, 9, 1, 3, 2, 6]
// arr.sort() // [1, 2, 3, 5, 6, 9]
// console.log(arr)

// // 以匿名函式回參數做「升序」排序
// arr.sort(function (a, b) {
//   return a - b // a - b > 0
// })
// console.log(arr)
// // [1, 2, 3, 5, 6, 9]

// // 如果要反過來做「降序」排序
// arr.sort(function (a, b) {
//   return b - a
// })
// [9, 6, 5, 3, 2, 1]
// -------------------------------------------------
// var points = [40, 100, 1, 5, 25, 10]
// points.sort((a, b) => a - b)
// console.log(points)
// ----------------------------------------------------
var fruits = ['cherries', 'aapples', 'bananas']

// 返回 ["apples", "bananas", "cherries"]
// fruits.sort()
// console.log(fruits)
// --------------------------------------------------------
// var members = [
//   { name: 'Mike', age: 30 },
//   { name: 'Jimmy', age: 25 },
//   { name: 'Judy', age: 20 },
// ]

// // members.sort(function (a, b) {
// //   // boolean false == 0; true == 1
// //   return a.age > b.age
// // })
// // members.sort(function (a, b) {
// //   return -1
// // })

// // 順序依序會是 Mike -> Jimmy -> Judy
// console.log(members)
// -----------------------------------------------------
// let a = [1, 999999, 888]
// //a=99999 b=1
// //a=888  b=999
// a.sort(function (a, b) {
//   return b - a
//   //因為是99999>0  因此b要排在a後面
// })
// console.log(a)

// --------------------------------------------------
// let bb = [12, 1, 55, 51, 8, 4, 78, 6, 122, 3]
// bb.sort()
// console.log(bb)
// ------------------------------------------------
// let a = ['aa', 'aaa', 'b', 'bd', 'a', 'g']
// a.sort()
// console.log(a)
// -------------------------------------------------------
// let arry = [25155, 65]
//a=65 b=25155      正
// a=8 b=65        正
// a=484 b=8         負
//a=74752 b=484             負
//a=3 b=74752                正
//尋找b的值
// arry.sort((a, b) => {
//   let c = b
//   console.log(c)
// })
// arry.sort((a, b) => {
//   return b - a
// })
// console.log(arry)

// 25155 65     65 8    74752 484
// -------------------------------------------------------
