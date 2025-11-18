// create aary=>
// let marks = [10, 40, 52, 37, 92];

// arr modify =>
// let arr = [1, 2, 3,4];
// arr[2] =12; output => (4) [1, 2,12,4]

// //arr push =>
// let arr = [1,2,3,4,5];
// arr.push(700);   output => (6) [1,2,3,4,5,700]

//arr pop => last value nhi hut jaa ti h
//let arr = [1, 2, 3, 4, 5];
// arr.pop(); ouput => (4) [1,2,3,4]

//arr shift => surat s value hta deta h 
// let arr = [1,2,3,4,5];
// Array.shift(); output => (4) [1,2,3,4,5];

//arr unshift => surat m kuch add kr ta h
// let arr = [1,2,3,4,5];
// arr.unshift(0); output => (6) [0,1,2,3,4,5]

// //arr splice => bich s value hta ta h
// let arr = [1,2,3,4,5];
// arr.splice(2,1);  output => (4) [1, 2, 3, 4, 5]

//arr reverse =>
//     let arr = [1,2,3,4,5];
// arr.reverse();  output => (5) [5, 4, 3, 2, 1]

//arr short => short hemsa ek function accept krta h
// let arr = [11, 12,62,4,3,25];
//let sr = arr.short (function(a,b) {
// return a - b;    // and retrun b - a // acssding order //desding order
// });

// //arr.forEach =>
//     let arr =[11, 62, 3, 4, 25];
// arr.forEach(function (val){
//     console.log(val);
// })

// map =>
    // let arr = [11, 62, 3, 4, 25];

// map => map srf tab use hota jab aapko ek naya array banana hai pichhle
// array ke data ke basis pr 

// jab bhi aapko asia koi case dikh jaaye jaha par ek array se naya
// array banega and wo naya array kuch values ko rakhega tab map lagega


// map dikhte hi saath mn mein ek blank array bna liya karo

// let newarr = arr.map(function(val){
    // return 12;    //newarr output (5) [12 12 12 12 12]

// })
// filter => kuch  purne mumber array m s laata h or nya or kuch chod deta h

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,];
// let newarr = arr.filter(function(val){
//    if(val > 4) return true;
// })          //output (4) [5, 6, 7, 8]

// reduce => ek array s ek value banana

// let arr = [1, 2, 3, 4, 5, 6];

// let ans = arr.reduce(function(accumultor, val) {
//     return accumultor + val;
// }, 0); //  ans = output => 21



// //find=>
//     let arr = [1,2,3,4,5,6];
//  let va = arr.find(function (val){
//     return val === 1;
//  });   output = 1


// // some => 
//     let arr = [10, 20, 30, 80];

// let any = arr.some(function (val){
//     return val > 70;
// });

// // spard =>  copy karta h
//     let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = [...arr];


// Q1: Create an array with 3 fruits and print the second fruit.Create
// let fruit = ["apple", "guava","banana"]
// fruit[1]; output => guava



// Q2: Add "Mango" at the end and "Pineapple" at the beginning of this array:

// let fruits = ["Apple", "Banana"];
// fruits.push("mango");
// fruits.unshift("pineapple"); output=> (4) [pineapple, apple, Banana, Mango ]



// Q3: Replace "Banana" with "kiwi" in the array above.

// let fruits =["Apple", "Banana"];
// fruits.pop();
// fruits.push("Kiwi"); output => Apple Kiwi


//Q4: Remove the last item from this array using a method:
// let numbers = [1,2,3,4];
// numbers.pop(); // numbers output => (3) [1, 2, 3]


//Q5 Insert "Red" and  "Blue" at index 1 in this array:

// let colors = ["Green", "Yellow"];
// colors.splice(1, 0, "Red", "Blue"); // colors output => Green Red Blue Yellow 

// Q6: Extract only the middle 3 elements from this array
// let items = [1, 2, 3, 4, 5, 6];
//let newarr = items.slice(1, 4);
//console.log(newarr)  output  => (3) [2,3]

// Q7: Sort this array alphabetically and then reverse it:
// // let names = ["Zara", "Arjun", "Mira", "bhai"];
// names.sort().reverse();

//Q8: Use  .map() to square each number;
// let arr = [1, 2, 3, 4];
// let newarr = arr.map(function(val){
//     return val * val;
// })    // newarr output => (4) [1, 4, 9, 16] 

//Q9: Use .filter() to keep numbers greater than 10:
//let arr = [5, 12, 8, 20, 3];
//let newarr = arr.filter((val) =>{
    // return val>10; // newarr  output => (2) [12, 20]
// });

// Q10: Use .reduce () to find the sum of this array:
// let arr = [10, 20, 30];
//let sum = arr.reduce(function(acc, val){
// return acc + val;  // sum output => 60
// }, 0);   

//Q11: Use .find() to get the first number less than 10;
// let arr = [12,15, 3,7,20];
// let ans = arr.find(function(val){
//     return val < 10;
// });    //ans output => 3

// Q12: Use .some() to check if any student has scored below 35:
// let arr = [45, 60, 28, 90];
// let ans = Array.some (function(val){
//     return val < 35;
// })    output =>true

// // Q13: Use  .every() to check if all numbers are even:
// let arr = [2, 4, 6, 8, 10];
// let ans = arr.every(function(val){
//     return val % 2 === 0;
// });    // ans output => true

// Q14: Destruture this array to get firstname and lastName
// let fullName = ["Sumit", "Bhaskar"];
// let [firstName, lastName] = fullName; //output FirstName Sumit lastName Bhaskar

// Q15: Merge  two arrays using spread operator:
// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b]; // c output (4) [1, 2, 3, 4] 

// Q16: Add "India" to the start of this array using spred:
// let countries = ["USA", "UK"];
//countries = ["India", ...countries];  //countries output => (3) ["India", "USA", Uk]

//Q17 Clone this array property (not by refernce);
// let arr = [1, 2, 3];
// let arr2 = [...arr];