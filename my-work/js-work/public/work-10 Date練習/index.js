let dat = new Date(2016, 11, 25, 11, 37, 15, 99)
// 請問老師new Date()裡面的參數 console.log出來是2016-12-25T19:37:15.099Z ，我上面月份填11為什麼console.log是12，12才是真正的月份嗎??  然後很奇怪的是我用dat.getMonth()得到的答案卻是11 我不了解真正的月份到底是11還是12?
//我看書上寫.getMonth() 他說 一月= 0 12月=11 但是很奇怪的是 我上面new Date 月份寫11 ，那為什麼console.log dat.getMonth() 月份卻還是11呢， 他並沒有像書上說的-1 !!   new Date() console.log後得到的月份答案會自己填的參數-1，但getMonth() console.log出來卻不是自己填的參數值-1呢

console.log(dat.getMonth())
console.log(dat.getDay())
console.log(dat.getHours())
console.log(dat.toLocaleString())
console.log(dat.toLocaleDateString())
console.log(dat.toLocaleTimeString())
