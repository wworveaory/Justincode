let a={
	d:'1'
}
a.dddd='123';
console.log(a);
setTimeout(function(){
	console.log(a);
},10000);

