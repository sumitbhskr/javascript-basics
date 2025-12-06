// // Node REPL => Read Evaluate Print Loop

// R =>	Read	User ke input (code) ko read karta hai.
// E =>	Eval (Evaluate)	Code ko execute (run) karta hai.
// P =>	Print	Result ko screen par print karta hai.
// L =>	Loop	Phir se next input ke liye wait karta hai (repeat process).


// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello", i);
    
// }

// Process=> This object provides information about, and control over, the current Node.js process.

// process.argv=> retruns an array containing the command-line argumnets passed when the Node.js process was launched.


// process.argv=>

// let args = process.argv;

// for(let i=2; i<args.length; i++){
// console.log("hello to", args[i]);
// }


// module.export => Math.js file  bnai (dusri file ki property ko use kis trha kr)


// model.exports=>requiring files

// require() => a built-in function to include external modules that exist separate files.

//module.exports => a spical object

// const someValue = require("./math");

// console.log(someValue);


// Module.exports => requring directories


const info = require("./Fruits");

console.log(info);


// NPM => Node package Manager 

// npm id the standard package manager for Node.js 
