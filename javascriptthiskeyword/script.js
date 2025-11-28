
///// The this keyword =>
     // this in global scope, function, method, event handler, class

//this => this keywrod special keyword hai, kuki jasie ki baaki saare keyword ki value 
// ya unka nature same rehta hai this ki value ya nature badal jaata hai is baat se ki 
// aap usey kaha use kar rahe ho  


// global scope =>

// console.log(this); // output => window 


// function scope =>  // output => window

// function abcd(){
//     console.log(this);
// }
// abcd();

//method => ek aisa function jo object ke ander ho us ko method kahte h

//     let obj = {
//         name: "sumit",
//         sayName: function (){
//             console.log(this.name);
//         },
//     };        //output => sumit
// obj.sayName();

// event handler =>
//  document.querySelector("h1").addEventListener("cilck", function(){
//             console.log(this.style.color = "red");
//         });


//class => class k ander this ki value blank object hoti h

//     class Abcd{
//         constructor(){
//             console.log("hey");
//             this.a = 12;
//         }
//     }
//   let val =  new Abcd();  outout => val Abcd{a: 12}
 

// this ki value =>
    // =====>
//global - window
//function - window
//method with es5 function - object
//method with es6 arrow function - window
//es5 function inside es5 method - window
//arrow function inside es5 method - object
//event handler - element
//class - blank object

// arrow function and lexical this=> this ki value window

// let obj = {
//     sayName: ()=>{

//     }
// }
    

//Manual binding: bind, call, apply=>

//function ko call karte waqt aap set kr skte ho ki uski this value 
// kya hogi 


// call =>
// let obj = {
//     name: "sumit",
//     age: 23,
// };
//  function abcd(){
//     console.log(this);    //(this.age) (this.name)
//   }

// abcd.call(obj);  output =>{ name: sumit}

//let obj = {
//     name: "sumit",
//     age: 23,
// };
//  function abcd(a, b, c){
//     console.log(this, a, b, c); 
//}
//abcd(obj,1,2,3);

//apply =>
  //  let obj = {
//     name: "sumit",
//     age: 23,
// };
//  function abcd(a, b, c){
//     console.log(this, a, b, c); 
//}
//abcd.apply(obj,[1,2,3]);


//bind =>

 //   let obj = {
//     name: "sumit",
//     age: 23,
// };
//  function abcd(a, b, c){
//     console.log(this, a, b, c); 
//}
//let fnc = abcd.bind(obj,1,2,3);