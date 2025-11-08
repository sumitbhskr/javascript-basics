// Array (Data Structure)=>
    // Linear collection of things


let students = ["aman", "shradha", "rajat"]
 console.log(students);


// Visualizing Array =>

    // let nums = [2, 4, 6, 8];
    // console.log(nums);
    // console.log(nums.length);

/// Creating array =>

    let info = ["Sumit", 23, 89.9];
    console.log(info);


// Arrays are Mutable =>

    let fruits =["mango", "apple", "litchi"];
    fruits[0] = "banana";
    fruits[1] = "pinepple";
    fruits[10] = "papaya";

    console.log(fruits);

// Array Methods =>

    // push : add to end => 

// let cars = ["audi", "bmw", "xuv","maruti"]
// console.log(cars.push("toyota"));
// console.log(cars);

    // pop : delete from end & returns it  =>

// let cars = ["audi", "bmw", "xuv","maruti"]
// console.log(cars.pop("toyota"));
// console.log(cars);

    // unshift : add to start =>

// let cars = ["audi", "bmw", "xuv","maruti"]
// console.log(cars.unshift("toyota"));
// console.log(cars);

    // shift : delete from start & returns it => 

let cars = ["audi", "bmw", "xuv","maruti"]
console.log(cars.shift("toyota"));
console.log(cars);


// Qs 1 For the given start of an array, change it to final from using methods.

// let months = ["january", "july", "march","august"];
// console.log(months.shift());
// console.log(months.shift());
// console.log(months);
// console.log(months.unshift("june"));
// console.log(months.unshift("july"));
// console.log(months);


// Array Methods =>
    // let primary = ['red', 'yellow', "blue"];
    // console.log(primary.indexOf("yellow"));
    // console.log(primary.indexOf("green"));
    // console.log(primary.indexOf("yellow"));
    
// includes : serach for a value  =>
    // console.log(primary.includes('red'));
    // console.log(primary.includes('green'));

// Array Methods =>
    // concat => merge 2 arrays =>

// let primary = ['red', 'yellow', 'blue'];
// let secondary = ['orange', 'green', 'violet'];

// console.log(primary.concat(secondary));


// reverse = > reverse an array =>
let primary = ['red', 'yellow', 'blue'];
let secondary = ['orange', 'green', 'violet'];

console.log(primary.reverse());



// slice =>  copies a portion of an array =>
    // let colors = ['red', 'yellow', 'blue', 'oranage', 'pink', 'white'];
    // console.log(colors.slice());
    // console.log(colors.slice(2));
    // console.log(colors.slice(2, 3));
    // console.log(colors.slice(-2));



//Array Methods =>
// splice => removes / relaces / add element in place

// splice (start, deleteCount, item0...itemN)



let colors = ["red","yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);




// sort => sorts an array =>

    let days =["monday", "sunday", "wednesday", "tuesday"];
    console.log(days.sort());


    let squares = [25, 16, 4, 49, 36, 9]
    console.log(squares.sort());


    let chars = ['b', 'd', 'e', 'a'];
    console.log(chars.sort());





// Qs1 For the given start of an array, changes oi to final from using splice 

let months = ['january', 'july', 'march', 'august']
console.log(months.splice(0, 2, 'july', 'june'));
console.log(months);


// Qs2 Return the index of the "javascript" from the give array, if it was reversed.

let lang =['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(lang.reverse());
console.log(lang.reverse());
console.log(lang.reverse().indexOf("javascript"));



// Array References => address in memory

// let arr = ['a', 'b', 'c'];
// let arrCopy = arr;
// console.log(arr == arrCopy);

// console.log(arrCopy);
// arrCopy.push('d');
// console.log(arr);

// Constant Arrays =>

    const arr = [1, 2, 3];
    console.log(arr.push(4));
    console.log(arr);

// Nested Arrays =>

let nums = [[2, 4], [3, 6], [4, 8]];
console.log(nums);
console.log(nums.length);



// Qs Practice 
// Create a nested array to show the following tic-tac-toe game state


let game = [['X','null','O'],['null', 'X', 'null'], ['O', 'null', 'X']];
console.log(game);






    

    



    



   


    








    
    


