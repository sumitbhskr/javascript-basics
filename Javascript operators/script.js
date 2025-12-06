// Arithmetic, comparison, logical, assignment, unary, ternary


// Arithmetic 
//  +  -  *  /  %  **

//  comparison
// = == ===
// 12==13      output  false
// 12 =="13"   output  true
// 12 ==="13"  output  true
// 12 != 13    output  true
// 12 != "12"  output  false
// 12 !== "12" output  true
// 12 > 11     output  true

//assignment=>
//  
// let a = 12;
// a += 3;
// a-=11;
// a*=2;
// a/=2;
// a%=2;

// logical =>
//
// &&  || !

//true && true     output   true
//true && false    output   false
// false && false  output   false

//unary opertor =>
    // +  - ! typeof ++ --
// let a = 12;
//  ++a       output => 13
//  a++        output => 12

// ternary opertor =>
    //  ?:

// conditon ? true hui ka code : false hui  ka code

// 12 > 13 ? console.log("true") : console.log("false")

// typeof 12  output => number

// typeof null output => object
// typeof []   output => object
// typeof NaM  output => number


// Qustion 1=>
//     let x = 10;
//     let y = 20;

//     if (x > && y < 25) {
//         console.log("A");
//     }
//    else {
//     console.log("B")
//    }

//  output => A  

// Qustion 2=>
    // let isAdmin = true;
    // let isLoggedIn = false;

    // if(isAdmin || isLoggedIn) {
    //     console.log("Access granted");

    // }else {
    //    console.log("Access denied");
    // }

    // output => Access granted
  
// Qustion 3 =>
//     let temp = 35;
// if (! (temp < 30)) {
//     console.log("Hot");
// } else {
//     console.log("Pleasant");
// }

// output => Hot

// Qustion 4 =>
//     let a = 0;
// if(a) {
//     console.log("Truthy");

// }else {
//     console.log("Falsy");
// }
// output => Falsy

// Qustion 5 =>
//     let score = 78;
// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "c" : "Fail";
// console.log(grade);
// output => B


// Qustion 6 =>
//     let score = 24;
// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "c" : "Fail";
// console.log(grade);
// output => Fail


// Qustion 7 =>
//     let points = 120;
// let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
// console.log(status);
// output => Gold

// Qustion 8 =>
//     let points = 20;
// let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
// console.log(status);
// output => Bronze


// Qustion 9 =>
//     let points = 60;
// let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
// console.log(status);
// output => Silver

// Qustion 10 =>
//  let loggedIn = true;
// let hasToken = false;
// let Access = loggedIn && hasToken ? "Allow" : "Deny";
// console.log(Access);
// output = Deny


// let a = 5;
// a++;
// console.log(a);
// output = 6



// let b = 7;
// ++b
// console.log(b);
// output = 8

// let x = 3;
// let y = x++;
// console.log(x,y);
// output = 4 3


// let p = 4;
// let q = ++4;
// console.log(p, q);
// output = 5 5

// let m = 10;
// console.log(m--); // Line 1
// console.log(m)  // Line 2
// output = 10 9


// let n = 5;
// let result = n++ + ++n;
// console.log(result);
// output = 12


// let likes = 100;
// function likePost(){
//     return ++ likes;
// }
// console.log(likesPost());
// console.log(likes);
// output = 101 101


// let count = 5;

// if (count -- ===5) {
//     console.log("Matched");
// }else {
//     console.log("Not matched");
// }

// output = Matched

// let i = 1;
// console.log(++i);  //2
// console,log(i++); //2 (but i is now 3)