// Loops => Used to iterate(repeat) a piece of code

// console.log("1");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");

// for loop =>

// for(let i=1; i<=10; i++){
//  console.log(i);
// }
// reveres =>

// for (let i = 10; i >= 1; i = i - 3) {
//   //(i=i-3) // ya (i--)
//   console.log(i);
// }

// print all odd numbers (1 to 25) =>

// for(let i=1; i<=25; i=i+2){
//   console.log(i);
// }
///////
// console.log("backwards");
// for(let i=15; i>=1; i=i-2){
//   console.log(i);
// }

// print all even numbers (2 to 10)

// console.log("even numbers")
// for(let i=2; i<=10; i=i+2){
//   console.log(i);
// }

//backwords

// console.log("backwords");
// for(let i=10; i>=2; i=i-2){
//    console.log(i);

// }

//Infinite Loops =>

//  for(let i=1; i>=0; i++){
//   console.log(i);
//  }

//  for(let i=1; i<=5; i--){
//   console.log(i);
//  }

//  for(let i=1; ; i++){
//   console.log(i);
//  }

// Print the muiltiplication table for 5=>

// for(let i=5; i<=50; i=i+5){
//   console.log(i);
// }

// for(let i=3; i<=30; i=i+3){
//   console.log(i);
// }

// for(let i=7; i<=70; i=i+7){
//   console.log(i);
// }

//user s puch n k liy =>

//   let n = prompt("write your number");
//  n = parseInt(n);

//   for(let i=n; i<n*11; i=i+n){
//     console.log(i);

//   }

// Nested for loop=>

// for(let i=1; i<=3; i++){
//   console.log(`outer loop ${i}`);
// for(let j=1; j<=3; j++){
//  console.log(j);

// }
// }

// while loop =>

// let i = 1;
// while(i <= 5){
//   console.log(i);
//   i++;
// }

//  let i = 0;
// while(i <= 20){
//   console.log(i);
//   i++;
// }
// even numbers =>

//  let i = 0;
// while(i <= 20){
//   console.log(i);
//   i=i+2;
// }

// odd numbers =>

//  let i = 1;
// while(i <= 20){
//   console.log(i);
//   i=i+2;
// }

//Favorite Movie with whlie loop =>

//   const favMovie ="avatar";

//   let guess = prompt("guess my favorite movie");

//   while(guess != favMovie){
//   if(guess = "quit"){
//   console.log("you quit");
//   break;
// }
//   guess = prompt("wrong guess. please try again");
//   }
// if(guess == favMovie){
//  console.log("congrats!!");

// }

// break keyword =>
// let i = 1;
// while (i <= 5) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }
// console.log("we used break at 3");

// Loops with Arrays =>

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");
// for(let i=0; i<fruits.length; i++){
// console.log(i, fruits[i]);
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");
// for(let i=fruits.length-1; i>=0; i--){
//   console.log(i, fruits[i]);

// }

//Loops with Arrays =>
// Nested Loops with Nested Arrays

// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "flash"],
// ];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(i, heroes[i], heroes[i].length);
//   for (let j = 0; j<heroes[i].length; j++) {
//     console.log(`j=${j}, ${heroes[i][j]}`);
//   }
// }


// let student = [["sumit", 95], ["amit", 96], ["pankaj", 97]];

// for(let i=0; i<student.length; i++){
//   console.log(`info of student #${i+1}`);

//   for(let j=0; j<student[i].length; j++){
//     console.log(student[i][j]);

//   }
// }


// for of loop => for(element of collection)

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (fruit of fruits) {
  console.log(fruit);
}

for (char of "sumitbhaskar") {
  console.log(char);

}
