const aa = document.getElementById('aa')
let a = [{
        name: '黃家承',
        age: 41,
        gender: 'girl',
        hairColor: 'pink',
        abc: 2312,
    },
    {
        name: '成名威',
        age: 46,
        gender: 'gisrl',
        hairColor: 'piddenk',
        abc: 2312,
    },
    {
        name: '吳俊碩',
        age: 1,
        gender: 'de因為愛l',
        hairColor: 'eepink',
        abc: 2312,
    },
    {
        name: '桑若紅',
        age: 66,
        gender: 'd你知道rl',
        hairColor: 'ee嗎nk',
        abc: 2312,
    },
    {
        name: '乖孫',
        age: 18,
        gender: 'aa道rl',
        hairColor: '妳好k',
        abc: 59595,
    }
]
let name = ""

// aa.innerHTML=`我的名子叫做${b}`
for (let i = 0; i < a.length; i++) {
	console.log(i);

    name +=`我的名子叫做${a[i].name}，今年${a[i].age}歲!!`
  
}
aa.innerHTML = `<h1>${name}</h1>`