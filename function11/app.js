function hello() {
  console.log("hello");
}
hello();

function printName() {
  console.log("Sumit Bhaskar");
}
printName();

function print1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
print1to5();

function isAdult() {
  let age = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }
}
isAdult();
// PrintPoem =>

function printPoem() {
  console.log("Twinkle Twinkle, little star");
  console.log("how I wonder what you are");
  console.log("Up above the world so high");
  console.log("Like a diamond in the sky");
}
printPoem();

// Qs1 Create a function to roll a dice & always dispaly the value of the dice(1 to 6).

function rolldice() {
  let rand = Math.floor(Math.random() * 6) + 1;
  console.log(rand);
}
rolldice();

// Functions with Arguments =>
//Values we pass to the function

function printName(name) {
  console.log(name);
}
printName("Sumit");

////// AND

function printInfo(name, age) {
  console.log(`${name}'s age is ${age}.`);
}
printInfo("Sumit", 23);
printInfo("Aumit", 23);
printInfo("Karan");
printInfo(14);


function sum(a, b){
    console.log((a+b));
}
sum(1, 2);
sum(5, 11);
sum(6, 4);

// Qs1 Create a function that gives us the average of 3 numbers.

function calcAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}
calcAvg(2, 4, 6);
calcAvg(3, 3, 3);

//Qs2 Create a function that prints the multiplication table of a number.

function printTable(n) {
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
        
    }
}
printTable(2);
printTable(7);
printTable(73);



//Return Keyword =>
    // return keyword is used to return some value from the function 

// input ---------->Function------------->output
               // (does some work) 

// function sum(a, b){
//     return a+b;
// }
//  console.log(sum(3, 4));


function sum(a, b) {
    console.log("hello");
    console.log("hello");
      return a+b;
    console.log("hello2");
    console.log("hello2");   
}

console.log(sum(1, 2));


function isAdult(age){
    if(age >= 18) {
        return "adult";
    }else {
        return "not adult";
    }
}

// Qs3  Create a function that returns the sum of numbers from 1 to n

function getSum(n){
let sum = 0;
for(let i=1; i<=n; i++){
sum +=i;
}
return sum;
}
console.log(getSum(4));


//Qs4 Create a function that returns the concatenation of all strings in an array


let str = ['hi', 'hello', 'bye', '!'];

function concat(str) {
    let result = '';
    
    for(let i=0; i<=str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(str);


// Scope 

// Scope determines the accessibility of variables, Object, and function from different parts of the CommandEvent

// function
// Block
// Lexical

//function Scope => Variables defined a function are not accessible (visible) from outside the function

// let sum =54;    // Global Scope

// function calsum(a, b){
//     let sum = a+b;    //Function Scope
//     console.log(sum);
// }

// calsum(1, 2);
//  console.log(sum); 


//Block Scope => Variables declared inside a {} block cannot be accessed from outside the block

// {
//     let a = 25;
// }

// console.log(a);

// for(let i=1; i<=5; i++){
//     console.log(i); // block scope
// }
//  console.log(i);  // global scope

let age  = 25;
if(age >= 18){
    let str = "adult";
    console.log(str);
}


// Lexical Scope => a variable defined outside a function can be accessible inside another function defined after the variable declaration 

//The opposite is NOT ture.

function outerfunction() {
    let x = 5;
    let y = 6;
    function innerfunc(){   
        console.log(x);   
        console.log(y);   
    }
    innerfunc();
}
outerfunction(); 


// Qs 1 What will be the output  =>

// let greet = "hello";       // Global scope

// function changeGreet(){
//     let greet = "nameste";     //function scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
//     innerGreet();
// }

// console.log(greet);
//  changeGreet();

//  output => hello   nameste


// Function Expressions =>

    // const sum = function(a, b){
    //     return a+b;
    // }
//  browser console m liknha h => sum       

// let hello = function(){
//     console.log("hello");   
// }   // browser console m liknha h => hello



// Higher Order Functions =>

    // A function that does one or both 
    // takes one or multiple function as arguments
    // returns a function

// takes one or multiple function as arguments =>

    function multipleGreet(func, n){    //higher order function
        for(let i=1; i<=n; i++){
            func();
        }
    }
    let greet = function(){
        console.log("hello");
    }
    // multipleGreet(greet, 3);
        //   ya
    multipleGreet(function() {console.log("namaste")}, 4);


// Higher Order Functions =>
    // returns a function

function oddOrEventFactory(request){
    if(request == "odd"){
        return function(n) {
       console.log(!(n%2 == 0));      
}
} else if (request == "even"){
    return function(n){
       console.log(n%2 == 0);       
}
}else {
    console.log("wrong request"); 
}
}
let request ="odd"; //even

console.log(request);

// Methods => Actions that can be performed on an object 

const calculator = {
    num: 55,
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b
    }
};

