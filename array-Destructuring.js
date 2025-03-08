

// _______ES6 array-destructuring______

const array = [1,2,3,4,5,6,7,8,9,0];
let [a ,f, r,...h]=array;
console.log(a ,f, r,...h);

// _______ES6 array-destructuring______
const array2 = ["jakaria", "jak","nove","nomain","allve","refe"];
let[t,s,d,...u]= array2;
console.log(t,s,d,...u)

// ________ES6 object Destructurng____________
const obj ={
    name1:"jakaria",
    age:14,
    inf :4523
}
const  {name1,age,inf} = obj ;
console.log(name1,age,inf);

const obj1 = {
    Emil : "jakarija@gmail.com",
    Number:"01401813864",
    country:"bingladash"
}
console.log(obj1)
const {Emil,Number,country}=obj1;
console.log(Emil,Number,country)
