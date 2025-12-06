// Array Methods =>
// 1  forEach // 2 map // 3 filter // 4 some // 5 every // 6 reduce

//1 forEach =>

// let arr = [1, 2, 3, 4, 5];

// let print = function(el) {
//     console.log(el);
// };
// arr.forEach(print);

// ya

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(el) {
//     console.log(el);
//  });

//  ya

//  let arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => {
//     console.log(el);
//  });

// array of objects=>
let students = [
  {
    name: "aman",
    marks: 95,
  },
  {
    name: "sumit",
    marks: 94.4,
  },
  {
    name: "bhaskar",
    marks: 93,
  },
];

let gpa = students.map ((el) => {
    return el.marks / 10;
})

// arr.forEach((student) => {
//     console.log(student.marks);
// })


// Map =>
    let num = [1, 2, 3, 4];
  let double = num.map((el) => {
    return el * el;
  })

// filter =>
    // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // let ans = nums.filter((el) => {
    //     return el % 2 == 0;  //even -> true, odd -> false
    // });

// Every => returns true if every element of array gives true for some function. Else returns false.

// [2, 4, 6, 8]. every((el) => el%2 == 0); // even numbers k liyr browser console m chek kro

// [7, 3, 5, 1]. every((el) => el%2 != 0); // odd numbers k liyr browser console m chek kro

// some =>  returns true if some element of array gives true for some function. Else returns false.


// Reduce Method =>  Reduces the array o a single value

//[1, 2, 3, 4].reduce((res, el) => (res+el) ); // output=> 10  browser consloe m 

// let nums = [1, 2, 3, 4];
// let finalVal = num.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);


// Reduce => finding Maximum in an array 

// let arr = [1, 4, 2, 3, 5, 6, 7, 2];

// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){     
//     }
// }
// console.log(max);

// let arr = [2, 5, 8, 1, 10, 3];
// let max = arr.reduce((max, el) => {
//     if(max < el){
//         return el;
//     }else {
//         return max;
//     }
// });
// console.log(max);

// Practice Qs 1 check if all numbers in our array multiples of 10 or not.

// let nums = [10, 20, 30, 40];

// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);




// Practice Qs 2  Create a function to find the min number in an array


// function getMin(nums) {
// let min = nums.reduce((min, el) => {
//     if (min < el) {
//         return min;
//     }else {
//         return el;
//     }
// });
// return min;
// }
// let nums = [10, 20, 30, 40, 5];

// Default Parameters => Giving a default value to the arguments
function sum (a, b = 2){
    return a + b;
}

//Spread => Expands an iterable into multiple values.

console.log(..."sumitBhaskar") // output  =>   s u m i t B h a s k a r


//Spread => with Array Literals =>
//     let arr = [1, 2, 3, 4, 5];
// let arrArr = [...arr];
// console.log(arrArr);

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...odd, ...even];

// console.log("odd:", odd);
// console.log("even:", even);
// console.log("nums:", nums); 


// Spread with Object Literals =>
 const data = {
    email: "ironman@gamil.com",
    password: "abcd",
 };

 const dataCopy = {...data, id: 123, country:"India"};
 console.log(dataCopy);


 let arr = [1, 2, 3, 4, 5, 6]; //val
 let obj1= {...arr}; //obj => key:val

 console.log(obj1);

 let obj2 = {..."Sumit bhaskar"};
 console.log(obj2);
 
 // Rest =>Allows a function to take an indefinite number of arguments and bundle them in an array
//  syntax =>
             // function sum(...args){
            //     return args.reduce((add, el) => add + el);
           // }

// function sum(...args){
//     //arguments
//     for(let i=0; i<args.length; i++){
//        console.log("you gave us:", args[i]); 
//     }
// }

// function min(a, b, c, d){
//     console.log(arguments);
    
// }
// console.log(min(1, 2, 3, 4));   //output k liy browser m min(1, 2, 3, 4) 


function sum(... args) {
return args.reduce((sum, el) => sum + el); //output k liy browser m sum(1, 2, 3, 4) 
}
console.log(sum(1, 2, 3, 4));

function min(msg, ...args) {
    console.log(msg);
    
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(min(4, 2, 9, 1, 7));


// Destructuring => Storing values of array into multiple variables

let names = ["tony", "bruce", "steve", "peter"];

let [winner, runnerup, ...others] = names;
console.log(winner, runnerup, ...others); // output => "tony" "bruce"

// Destructuring => Objects 

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "xyz"
};

let {username, password} = student;
console.log(username);

