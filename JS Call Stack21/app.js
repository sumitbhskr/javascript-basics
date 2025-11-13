// Call Stack => last in first out
// function hello() {
//     console.log("inside hello function");
//     console.log("hello");

// }
// function demo() {
//     console.log("calling hello function");
//     hello();

// }
// console.log("calling Demo function");
// demo();
// console.log("done, by!");

// Visualizing the Call Stack =>
// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three(); // Brakpoints => debug k liy use hota h

// JS is Single threaded =>
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);

//
setTimeout(()=> {
    console.log("apna Collage");  
},2000);

setTimeout(()=> {
    console.log("sumit bhaskar");  
},2000);
console.log("hello...");

