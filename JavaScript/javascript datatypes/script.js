// data types
//  data ka type

// 12 harsh true [] {} () null undifined NaN Symbol bigInt


//primitives -> aisi saari values jinko copy Karne par 
//tumhe ek real value mil jaaye

// (string, number Boolean, null, undefined, Symbol,BigInt)

// let a = 12;
// let b = a;

// string =>

// '' - single qoutes
// "" - double qoutes
// `` - backticks qoutes

// Number =>
// 12 - number
// 12.3 - number

// Boolean =>
// true and false
// let a = true;
// let b = false; 

// null => null ka matlab hai aapne jaan boojh kar koi value nahi di

// let a = null;

//undefined => undifined ka matlab hai aapne ek variable banaya aur usey value nahi di to jo 
// value by default mili wo hai  undifined

//let a; output => undefined

// symbol => unique immutable value

// future mein hum koi libraries  use karege ab is case mein un libraries mein kai baar  
// kuch fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai
//hui fields us library ki original fields ko change kar deta hai

//

//reference -> inko copy Karne pr real copy nahi milegi but aapko refernce milega parent ka

// (arrays, object, Functions)
// ( []        {}      () )

//let a = [1, 2,3];
// let b = a;
//b.pop();

// Dynamic Typing =>

// Dynamic Typing -> javascript mein static typing nahi hai and yaha par hai dynamic typing 
// jiska matalb hai aap data ko cahnge kr skte ho kyuki yaha par dynamic data types hai

// example ->
// let a = 12; // number
// a = true;   // boolean
// a = "harsh"; // string
// a = [];  // refernce data type
// a = null;
// a = undefined;

// typeof quirks (e.g., typeof null ==='object')
 // =>
// typeof 12  // output = number

// Type coercion (== vs ===)


// type conercion -> concept jis mein aapka ek type automatically convert ho jaayega 
  
// Truthy vs falsy values =>

 //false => 0 ""  undefined  NaN  null  document.all
 //true => rest all


 // Predict the result : true + false, null + 1, 5 + "5", !!undefined
 //true + false    output = 1
// null + 1        output = 1
// 5 + "5"         output = "55"   
// !!undefined     output = fasle
// typeof NaN  === number // true
// undefined vs Null =>
    // let x;
 //console.log(x);  // output = undefined
 //let y = null;
 //console.log(y);   // output = null