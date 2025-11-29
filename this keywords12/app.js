// this keyword = > "This" keyword refers to an object that is executing the current piece of code

// const student = {
//     name: "sumit",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// function getAvg() {
//     console.log(this);  // output => window
// }

// try & catch  =>
// the try statement allows you to define a block of code to be tested for errors while it is being executed
// The catch statement allows you to define a block of code to be executed, if an error in the ccures try block

console.log("hello");
console.log("hello");
let a = 5;
try {
  console.log(a);
} catch (err) {
  console.log("caught an error .. a is not defined");
  console.log(err);
}

console.log("hello2");
console.log("hello3");
console.log("hello4");

// Miscellaneous Topics =>
// Arrow Functions =>
const sum = (a, b) => {
  console.log(a + b);
};

const cube = (n) => {
  return n * n * n;
};

const pow = (a, b) => {
  return a ** b;
};

const hello = () => {
  console.log("hello world");
};

// Arrow Functions =>  Implicit return =>
const mul = (a, b) => a * b;
console.log(mul(3, 4));

// Set Timeout =>

// console.log("Hi there!");

// setTimeout(() => {
//     console.log("sumit Bhaskar");

// }, 4000);
// console.log("Welcome to");

//Set Interval =>

// let id = setInterval(() => {
//   console.log("sumit bhaskar");
// }, 2000);
// console.log(id);

// let id2 = setInterval(() => {
//   console.log("Hello World");
// }, 2000);
// console.log(id2);

// this with Arrow Function =>
const student = {
  name: "Vikash",
  marks: 95,
  prop: this, // global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this);   // parent's scope -> window
    return this.marks; 
  },
  getInfo1: function () {
    setTimeout(()=>{
        console.log(this); // student
    }, 2000)
  },
   getInfo2: function () {
    setTimeout( function () {
        console.log(this);  //window
        
    }, 2000)
},
};

// Practice Qs  Write an arrow function that returns the square of a number "n",

const square = (n) =>  n * n;

console.log(square);



// Practice Qs  Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
    console.log("Hello World")
}, 2000);

setTimeout(() =>{
    clearInterval(id);
    console.log("clear interval ran");
    
}, 10000);
