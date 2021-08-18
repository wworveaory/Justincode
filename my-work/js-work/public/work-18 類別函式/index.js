

// var phone1={
//   number:"123",
//   year:2025,
//   is_waterproff:false,
//   phone_age:function(){
//     return this
 
//     return 2021-this.year;
  
//   }

// }
// console.log(phone1.phone_age())

// class Phone{
//   constructor(number,year,is_waterproof){
//     number=this.number;
//     this.year=year;
//     this.is_waterproof=is_waterproof;
//   }
//   phone_age(){
//     return 2021-this.year
//   }
// }
// let ff= new Phone('您好',2020,'no watter')
// console.log(ff.phone_age())


// class Phone{
//   constructor(number,year,is_waterproof){
//     this.number=number;
//     this.year=year;
//     this.is_waterproof=is_waterproof;
//   }
//   phone_age(){
//     return this
//   }
// }

// let a = new Phone(199,151,15)
// console.log(a.phone_age())


// class Product{
//   constructor(name,price,number){
//     this.name=name;
//     this.price=price;
//     this.number=number;
//   }
//   en(){
//     return this.name
//   }
 
// }

// let product1= new Product('apple','4848',095959584)
// console.log(product1)
// let product2= new Product('banana','4448',095959584)
// console.log(product2)

// let c ={a:4,b:6}
// let b =Object.assign({},c)
// console.log(b)

class product{
  constructor(names,price,phone){
    this.names=names;
    this.price=price;
    this.phone=phone;
  }
  group(){
    return this
  }
}

//建立新物件 
// let product1=new product('banana',5858,0966857589)
// console.log(product1)
let product2=new product('cake',6868,0911157589)
// console.log(product2)
// console.log(product2.group())

// let product3 ={names:'banana',price:5858,phone:0911157589}
// console.log(product3)