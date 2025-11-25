// What why how
// What function

const { Declaration } = require("postcss")

// ager code likh diya to wo turant chal jaata hai

// function  abcd(){

// }  //is ka naam function statement

// let fnc = function(){

// }   //is ka naam function expression 

//fat  arrow fnc
//()=>{
// }  // is ka naam fat arrow function 

// let fnc = () => {
//     console.log("hello");
// };
// fnc();  is ka naam fat arrow function

// paramitters and arguments =>

//      function dance(v1){
//      console.log(`${v1} naach raha h`)
//  }
// dance("vikash");
// dance("amit");
// dance("Pankaj");
// dance("sumit");


// function add (v1, v2){
//     console.log(v1 + v2);
// }
// add(1, 2);
// add(11, 12);


// function add(v1, v2){
//     console.log(v1, v2);
// }

// add();  output => undefined



// function add(v1, v2){
//     console.log(v1 + v2);
// }

// add();  output => NaN

// Defult rest and  spread parameters =>
// jab  arguments kai saare ho to humein utne hi parameter
//banaane padege, issey bachne ke liye, hum rest ka use karte
//hai... agar ... function ke parameter space mein lage to wo rest
// operator hai and ager wo arrays and objects mein lage to wo spread operator hai 
//(... => rest function)

// function abcd(...val) {
//     console.log(val);
// }

// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// return values and early returns =>

//return matlab jaha se aaye ho wahi daal dena

// function abcd(v){
//     return 12 + v;
// }
// let val = abcd(23);
// console.log(val);

// first- class functions (assign to varuables, pass as arguments, pass as arguments, return from other functions)

// first class functions => functions ko  value ki trha treat kar sakte hai

// function abcd (val) {
//     val();
// }
// abcd(function(){
//     console.log("hey");
// });

// Higher-order functions => aise function  hota jo ki retrun kr ek function ya fir acceept kare ek function apne parameter mein

// function abcd(val){
//   return function(){
//   console.log("hey");
//   };
// }

// abcd()();


//pure vs impure functions =>

// aisa function jo ki baahar ki value na babdle wo hai pure function

// let a = 12;
// function abcd(){
//     console.log("hehehe");
// }    pure function

// function hui () {
//     a++;
// }  impure function

// aisa function jo baahar ki value ko badle de wo hai impure function



//  (very very imp) closures -> ek function jo return kare ek aur function aur 
// return hone waale function humesha use karega  parent function ka koi variable
 //  closures =>

// function abcd(){
//     let a =12;
//     return function(){
//         console.log(a);
//     }
// }


// lexical scoping => function k under ek or function ya ek function k under multipule function

    // function abcd(){
    //     let a =12;
    //     function defg(){
    //         let b = 13;
    //         function ghij(){
    //             let c = 14;
    //         }
    //     }
    // }


// IIFE(Immediately Incoked Function Expressions)=>

    //    ( function(){

//     })();
// (function () {
//     console.log("hehehe");
// })();



// Hoisting differences between declaration and expression

// Hoisting =>

// abcd();
// function abcd(){               // let abcd = function (){
//     console.log ("hehehe");
// }


// Q1: what's  the difference between function declaration and expression
// in  terms of hosting?

// abcd();

// function abcd(){

// }

// Q2: greet();

// function greet(){
//     console.log("Hello!");
// } output = Hello!

//Q3 Convert the function in arrow function

// function multiply(a, b){
//     return a * b;
// } 
 // ans =>
// ans=> let multiply = (a, b) => {
//     return a * b;
// };

// Q4: Identfy this qustion argument and paramiter

// function welcome(name) {
//     console.log(name);
// }
// welcome("Sumit");

// Q5: How many paramiters does this function  have and how many  arguments passed
// function demo (a, b, c) {}
//     demo(1, 2);
//  output => a = 1 b = 2 c = undefined 

//Q6: pridicate kro output =>
    // function sayHi(name = "Guest"){
    //     console.log("Hi", nmae);
    // }
    // sayHi(); output=> Hi Guest

// Q7: What does the ... operator  parameters =>
//  function abcd(...val){
//  console.log(val);
//  }

//  abcd(1,2,3 ,4 ,5,6); output => [1,2,3,4,5,6]

// Q8: Use rest parameter to accept any number of scores and return the toal.
 
// function getScore(...scores){
//   console.log(scores)
// }
// getScore(10,12,14,15) output => (4) [10,12,14,18]


// function getScore(...scores){
//   let toatl = 0;
//   scores.forEach(function (val){
//   total = total + val;
//   });
///return total;
//   }
// console.log(getScore(10,12,14,15)) output => 54


// Q9:  fixd  that function you should only return

// function checkAge(age){
//     if(age < 18){
//         console.log("Too young");
//     }else {
//         console.log("Allowed");
//     }
// }
// ans=> function chekAge(age){
//if (age < 18) return "Too young";
//return "Allowed"
//}
// console.log(chekAge(23)); output => "Allowed"

//Q10: what return value of  the function

// ans=> function f(){
// retrun:
// console.log(f())
// }   output=> undefined

// Q11: what does it mean  when wa say "function are first-class citizens"

// ans=> values

//Q12 Can you assign a function to a variable and then call it ? Show how.
// ans=> let a = function(){
// }
//  a ();


//Q13: Pass a function into another function and execute it inside.
// function abcd (val){
//          val();
// }
// abcd(function(){
//  console.log("hey");
// });


//Q14: what is a higher-order function

// function abcd(){
//     return function(){

//     }
// }

// // and 
// function abcd (val){
//           val();
// }
// abcd(function(){

// })


//Q15: highe order function konsa h 
// [1, 2, 3].map(function (x) {
//     return x * 2;
// });

// ans => map ek highe order function h



//Q116: pure function h ya impure function h
// let total = o;
// function addToTtal(num){
//     total += num;
// }
// ans => impure function h


//Q17: Convert the above function into a pure function 
// let total = 0;

// function addToTtal(num){
//     let newtotal = total;
//     newtotal += num;
// }


//Q18: What is a clouser? When is it created?

// ek asaa function jo return kr ek or function or under wala function bhar wali value use kr 


// function abcd(){
//     let val = 0;
//    return function(){
//        console.log(val);
//    }
// }



// Q19: function outer(){
// let count =  0;
// return function(){
//       count++;
//       console.log(count);
// };
// }

// const counter = outer();
// counter();
// counter();
//  output =>  1 2



//Q20: convert this normal function into an IIFE
// (function init() {
//     console.log("Initialized");
// })(); output => Initialized


// Q21: what is the use of IIFE Name one real-world use case

// let s = (function(){
//     let score = 0;
//    return{
//       getScore: function(){
//         console.log(score);
//       },
//       setScore: function (val){
//         score = val;
//       }
//    }
// }) ();


// Q22: What will be the output here and why?
// greet ();

// var greet = function(){
//     console.log("HI");
// }; output => error 


// greet ();
// function greet(){
//     console.log("Hi");
// }  output => Hi


// Q23: Write a BMI calculator

// function bmi(weight, hight){
//     return weight / (hight * hight);
// }
// console.log(bmi(69, 1.7).toFixed(2));

// Q24: Create  a reusable discount calulator(HOF)

// function discountCalculator(discount){
//     return function(price){
//      return price - price * (discount/100);

//     };
// }
// let discounter = discountCalculator(10)
// console.log(discounter(200));

// Q25: Build a counter using closure
//  function counter(){
// let count = 0;
// return function(){
//     count++;
//     return count;
// };
// }
// let c = counter();
// console.log(c());

//q26: Create a pure function to transform a value
// function double(val){
//     return val * 2;
// }
// console.log(double(5));

// Q27: Use IIFE to isolate variables

// (function(){
//     const password = "secret password";
//     console.log(password);
// })();
// console.log(password);

