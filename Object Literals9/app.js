// jS Object Literals =>
    // Used to share keyed collections & complex entities

// property => (key, value)pair 
// objects are a collection of properties


const delhi = {
    latitude: "28.7041 N",
    longitude: "77.1025 E"
}
console.log(delhi);


// const student = {
//     name: "sumit",
//     age: 23,
//     marks: 94.4
// };
// console.log(student);


const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};
console.log(item);


// Thread/Twitter Post =>

//  Create an object literal for the properties of threas/twitter post which includes-

//username
//content
//likes
//reposts
//tages

// const post = {
//     username: "@vikashbhaskar",
//     content: "This is my #firstPost",
//     likes: 150,
//     reports: 5,
//     tages: ["@amitbhaskar", "@sumitbhaskar"]
// }
// console.log(post);

//get Values =>

    const post = {
    username: "@vikashbhaskar",
    content: "This is my #firstPost",
    likes: 150,
    reports: 5,
    tages: ["@amitbhaskar", "@sumitbhaskar"]
}
// console.log(post);
console.log(post["username"]); // ya  console.log(post.username);
console.log(post.content);
console.log(post.likes);

    
// Get Values =>
    // js automatically convert object keys to strings. 
   // Even if we made the number as a key, the number will be convert to string.

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
// console.log(obj);
console.log(obj[1]);


//Add/ Update Vlaue =>
 
// Change the city to "Mumabi"
// Add a new property,gender: "Female"
// Change the marks to "A"

const student = {
    name: "sumit",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

// console.log(student);
console.log(student.city = "pilani");
console.log(student.gender = "male");
console.log(student.marks = "A");
console.log(delete student.marks);

// console.log(student.city);
// console.log(student.gender);



// Object of Objects =>
    // Stroing information of  multiple student

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     sumit: {
//         garde: "A",
//         city: "Puna"
//     },
//     amit: {
//         garde: "B",
//         city: "Mumbai"
//     }
// };

// console.log(classInfo);
// console.log(classInfo["aman"]);



// Array of Objects => Storing information of multiple students

const classInfo = [
    {
        name: "aman",
        garde: "A+",
        city: "Delhi"
    },
    {
        name: "sumit",
        garde: "A+",
        city: "puna"
    },
    {
        name: "karan",
        garde: "0",
        city: "Mumbai"
    }
];

console.log(classInfo);
console.log(classInfo[1].gender="male");

// Math Object =>



 // Properties         // Methods
                        //    Math.abs(n) n matlab koi bi number  
// Math.PI              //   Math.pow(a, b)
//Math.E                //  Math.floor(n) // nearest smallest int value               Math.ceil(n)  // larger value pr round of kr deta h 
                        //  Math.random()

//Random Integers =>

// From 1 to 10 =>
    // step1: let num = Math.random();   //0.4672448238732
    // step2: num = num * 10            //4.67367233672
    // step3: num = Math.floor(num);    //4
    // step4:  num= num + 1;

// from 1 to 10
// let random = Math.floor(Math.random() * 10) + 1; 
// random



// Qs1 Generate a random number between 1 to 100.

// ans =>

// Math.floor(Math.random() * 100) + 1;


// Qs2 Generate a random number between 1 to 5.

// ans =>

// Math.floor(Math.random() * 5) + 1;


