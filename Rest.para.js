

// ------------Respara miter---------
function rest  (a,b, ...jakaria){
    console.log(a,b, jakaria);


}
rest(1,22,34,4,55,66,77);

//--------spread operator--------

const array1 = [1,3,4,5,6,7,8];
const array2 = [ ...array1 ,'jakaria', 'Email : jakariaja043@gmail.com']
console.log(array2);

// __________ES6_Object Literals________

function array3 (MyName, myInfo){
    return{
        MyName,
        myInfo
    }

}
console.log(array3("jakaria"
    ,"Number: 01834545493"
));

// ____ES5__Object Literals___
function arr (masseg, coll){
      return{
        masseg:masseg,
        coll:coll
      }
}
console.log(arr("Hello world","0439304"))
  