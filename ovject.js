var myInfo = {YourName:"jakaria",  YourVlaise:"pirojpur"}
console.log(myInfo.YourName);
console.log(myInfo.YourVlaise);


for(var w = 1; w<=20; w++){
    function myInfo1(YourName1,YourNumber,YourVlaise1){
        this.YourName1 = YourName1;
        this.YourNumber = YourNumber;   
        this.YourVlaise1 = YourVlaise1;
    }
    var newObj = new myInfo1( "jakaria", 01401813864 , "pirojpur");   
    console.log(newObj.YourName1);
    console.log(newObj)
}
function say (name, masseg){
       return{
        name,
        masseg
       }
}
console.log(say('jakaria','hello jakaria'))
