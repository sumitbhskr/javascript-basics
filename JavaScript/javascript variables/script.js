// words vs Keywords
//var  let  const => keywords
// sumit Dinesh => words

// What is varible
// data ko store krna
//three types of vaiable => var let const

// var, let, const => line-by-line comparison
//var=>ES5 ka terka
//const let=>ES7 ka terka

// declarations and initialzation

// var a; //declare karna
// var a = 12; //declare and initialztion /// initialization => first value dena

// var a = 12;
// var =>
// window mein add hota hai
// function scoped hota hai
//aap firse declar (redeclar) kr skte ho same name se or error nhi aayega

//const => value change nhi hoti

// Scope (global, block, Functional)

//var a = 12; (global Scope)

// function abcd(){
//     if(true) {
//         var c = 13    => (functional Scope)
//     }
// }

// {
//     let a = 12 (block Scope)
// }


// Reassignment, redeclaration =>

// var a = 12;
// a = 32;  => (Reassignment)



// let b = 12;
//  b = 32  => (Reassignment)

//Temporal Dead Zone =>

//Temporal Dead Zone => utna area jitna mein javascript ko pata to h ki variable exist hai par
//  wo value nhi de sakta

// console.log(a);
// let a = 12;    // Cannot access "a" before initialztion
 // Temporal Dead Zone let or const k sath hoata h var k sath nhi

//console.log(a); =>
 
// kuyki yha pr variable naam ka concept hoist ho jata h
//var a = 12;  //output => undefined


// Hoisting imapct per type =>

// hosting => ek varable ko jab javascript mein banaate hai to wo variable do hisso mein 
// toot jaata hai and uska declare part uper chala jaata hai and uska initialization part 
// neech reh jata hai

//  var a;
// exmple =>
// var a = 12;
//  a = 12 // output undifined

//var   -> hosit -> undefined
//let   -> hosit -> x
//const -> hosit -> x


// console.log(nm);               //var nm = undefined;
// var nm = "Harsh";             //console.log(nm);
// output => undfined           // nm = "Harsh";

// console.log(age);
// let age = 25;              // output => error cannot access "age" before initialzation

// var x = 1;       // global
// {
//     var x = 2;   //global
// }
// console.log(x)       //output => 2

// let a = 10;  // block scope  // global scope
// {
//     let a = 20;
//     console.log("Inside:",  a);
// }
// console.log("Outside", a);   // output Inside: 20 Outside:10


// if (true) {
// var a = 1;
// var b = 2;
// }
// console.log(a);      // output  1
// console.log(b);     // output   error
 








