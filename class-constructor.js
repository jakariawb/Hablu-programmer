// _______class constructor _________

class book {
  constructor(bookName,price){
    this.bookName=bookName;
    this.price = price;
  }
  getName(country, city , HomeDistek){
    this.country= country;
    this.city = city;
    this.HomeDistek = HomeDistek;
  }
}
const play = new book("Baingla", "138tk")
console.log(play)
console.log( "Baingladash", "Burishal","pirojpur")
console.log(book);
console.log(play);

// _______ ES6 class constructor _________
class name {
  constructor(farher,marher,sister){
      this.farher = farher,
      this.marher = marher,
      this.sister = sister
  }
}
const faimleInfo = new name("Ruhul amin jomaddar","julakha bugom","shite");
console.log(faimleInfo);

//_____Es6___________class___Expression_________

let person = class{
  constructor(name){
    this.name = name;
  }
}
let nameof = new person ('jakaria');
console.log(nameof);

let info = class{
  constructor(name,number , Email,){
    this.name = name,
    this.number= number,
    this.Email = Email
  }
}
let infoType = new info ("jakaria","012401020","jakariaja@gmail.com")
console.log(infoType)
console.log(infoType.name)
