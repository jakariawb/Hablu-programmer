let jak = [12,21,11,22,1,2,];
let jak2 = jak.map(myfun)
function myfun(x){
    return x * 2; 
}
console.log(jak2);

console.log("barck")

let jak3 = [12,21,11,22,1,2,];
let jak5 = jak3.map(fy)
function fy (c){
    return c + 1;
}
console.log(jak5)

console.log("barck2")


let name = [12,1,21,22,2];
let name2 = []
name.forEach(myfun1)
function myfun1 (y) {
  name2.push(y + 1)
  
}
console.log(name2);
