const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};

console.log(factorial(10)); // Output: 120

const number1= (function(){
    let number = 0;
    return{
        number1:function(){
            number++
            console.log(number)
        },

        solime:function(){
            number--;

            console.log(number)
        }
    };
       
})();
 number1.number1();
 number1.number1();
 number1.number1();
 number1.number1();
 number1.number1();
 number1.number1();
 number1.number1();
 number1.number1();
 number1.solime();
 number1.solime();
 number1.solime();

 console.log("stop");

const counter = (function() {
    let count = 0;
    return {
        jakaria: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count
            console.log(count);
        }
    };
})();
counter.jakaria(); // Output: 1
counter.jakaria(); // Output: 2
counter.jakaria();
counter.jakaria("10") ;// Output: 1
counter.decrement()
counter.decrement()
console.log(5 > 20);
console.log (5 < 10);

const mingo = (function(){
  let discount = 1;
   return {
    price:function (){
        discount++;
        console.log(discount);
    },
    pise:function(){
        discount--;
        console.log(discount);
    },
    food:function(){
        discount--;
        console.log(discount);
    }
   }
})();
mingo.price();
mingo.price();
mingo.price();

mingo.pise();
mingo.pise();
mingo.pise();

mingo.food();
mingo.food();
mingo.food();
mingo.food();

const neme = (function(){
   let Number = 1;
   return{
    name2:function(){
        Number++;
        console.log(Number)
    },
    name3:function(){
        Number--;
        console.log(Number)
    },
    
    name4:function(){
        Number--;
        console.log(number)
    } ,
    number5 : function(){

        Number++;
        console.log(Number)
      } ,
      number5:function(){
        Number--;
        console.log(Number)
      }
    }
})();
neme.name2()
neme.name3()
neme.number5()
neme.number5()
neme.number5()
neme.number5()
neme.number5()
neme.name3()
