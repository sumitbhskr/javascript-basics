// repeat karna ko loop kahte hai
// for while do-while  for-in for-of for each
// 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8

// kaha se jaane hai -> kaha tak jaana hai -> kasie jaane hai
//for
//example
//1-50

// for(start; end; change){
//    for (let i = 1; i<101; i++){
//     console.log(i);
// }
// }


// kaha se jaane hai -> kab rukna hai -> kasie jaane hai
//while
//example

// 1 - 40 for
// 20 - 30 fo
// hello na aajaye - while
// laal color ka ped - while

// start
// while(end){
//     //code
//    change
// }

// let i = i;
// while(i<32){
//     //code
//     console.log(i);
//     i++;
// }

//      do while loop =>
// do{

// }
// while(end)
  
// let i = 1;
// do {
//     console.timeLog(i);
//     i++;
// } 
// while(i<20)

// break =>

// for(let i = 1; i<201; i++){
//    console.log(i)
//    if(i=== 32){
//     break;
//    }
// }

// continue =>

// for(let i = 1; i<201; i++){
//     if(i === 32){
//         continue;
//     }
//     console.log(i)
// }


// Q1.  Print numbers from 1 to 10 using  a for loop.

// for(let i = 1; i<10; i++){
//     console.log(i)
// }

// Q2.  Print numbers from 10 to 1 using  a while loop.

// for(let i = 10; i>0; i--){
//     console.log(i);
// }

// let = 10;
// while(i>0){
//     console.log(i);
//     i--;
  
// }

// Q3. Print even numbers from 1 to 20 using  a for loop.

// for(i = 1; i<21; i++){
//     if(i%2 ===0){
//         console.log(i);
//     }
// }


// Q4.  Print odd numbers from 1 to 15 using  a while loop.

// let i = 1;
// while(i<16){
//     if(i%2 === 1){
//         console.log(i);
//     }
//     i++;
// }

// Q5.  Print the multiplication table of 5 (i.e., 5 x 1 = 5....5 * 10 = 50)

// for(let i = 1; i<11; i++){
//     // console.log(5 * i);
//     console.log(`5 * ${1} = ${5 * i}`);
// }

// Q6.  find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
//  for(let i = 1; i<101; i++){
//     sum = sum + 1;
//  }
//  console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divible by 3.

// for(let i = 1; i<51; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }
 
// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd. 

// (e.g., "1 is odd", "2 is even", ...)

// let val = prompt("give a number");

// for (let i = 1; i<= val; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`);
//     }
//     else{
//          console.log(`${i} is odd`);
//     }
// }


// Q9 Count how many numbers between 1 to 100 are divisible by both 3 and 5.

// for(let i = 1; i < 101;  i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log(i)
//     }
// }

// Q1: Stop at First Multiple of 7

// Write a loop from 1 to 100 that:
// Prints each number
// stop completely when it finds the first number divisible by 7


// for (let i = 1; i<101; i++){
//      console.log(i);
//     if(i % 7 === 0) {
//         break;
//     }
//     // console.log(i);
// }


 //Q2: Skip Multiple of 3

 // Write a loop from 1 to 20 that:
 // Skip numbers divisible by 3
 // Prints all others

 // Use continue

 // Expected output:
 // 1 2  4 5 7 8 9 10 11 ... (no 3, 6, 9 etc.)

//  for(let i = 1;  i<21; i++){
//     if(i%3 ===0)continue;
//     console.log(i);
//  }

//Q3 Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers
// Then stop the loop

// Use both if, continue, add a counter + break

// Expected output:
//1 3 5 7 9

// let count = 0;
// for (let i = 1; i<101; i++){
//     if(i%2 === 1){
//         count++;
//         console.log(i);
//     }
//     if (count === 5) break;
// }

