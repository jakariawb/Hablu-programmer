var myInfo = {YourName:"jakaria",  YourVlaise:"pirojpur"}
console.log(myInfo.YourName);
console.log(myInfo.YourVlaise);




for(var w = 1; w<=2; w++){
    function myInfo1(YourName1,YourNumber,YourVlaise1){
        this.YourName1 = YourName1;
        this.YourNumber = YourNumber;   
        this.YourVlaise1 = YourVlaise1;
    }
    var newObj = new myInfo1( "jakaria",  `0102003033` , "pirojpur");   
    console.log(newObj.YourName1);
    console.log(newObj)
}

// ES6 javaseript;


function say (name, masseg){
       return{
        name,
        masseg
       }
};

console.log(say('jakaria','hello jakaria'));

function name (number , number1, ...fullarray){
    return{
        number,
        number1,
        fullarray

    }
}
console.log(name(1,"Like number", "number one Is a very good number",1 ,1,
    "Name: jakaria",
    "Numbr: 01401813864",
    "Email:jakariaja043@gmail.com",
    "git Link:sec = https://github.com/jakariawb",
    ""));

//  Default function parameters

// __________________ES5____________________
function say1 (masseg1){
    masseg1 = typeof masseg1 !== "undefined"? masseg1 :"HEllo world";
    console.log(masseg1)
}
say1()
// ai khana value dila pass hova abong upora o dila pass hoba 


// --------------ES6-----------------
function say (message = "jakaria"){
    console.log(message)
    var nume =  "I Am 23 Years Olld";
    console.log(nume)
}
say("My Name Is Jakaria")

// ------------ES6-----------------
// ______________ Rest Parameters___________
