// Fetch API & HTTP Basics =>
// Fetch API => Fetch API ek modern web API hai jo asynchronous HTTP requests ko handle karne ke liye use hota hai.
//  Yeh promises par based hai, jo asynchronous operations ko manage karna asaan banata hai.
// HTTP Basics => HTTP (Hypertext Transfer Protocol) ek protocol hai jo web browsers aur servers
//  ke beech data transfer karne ke liye use hota hai. Yeh request-response model par kaam karta hai.

//Fetch API ka use karke hum web se data fetch kar sakte hain, post kar sakte hain, update kar
//  sakte hain, aur delete kar sakte hain. 
// Yeh CRUD (Create, Read, Update, Delete) operations ko perform karne ke liye use hota hai.

//Fetch API: GET, POST, PUT, DELETE Requests =>

//GET Request => GET request ka use server se data retrieve karne ke liye hota hai.
//  Yeh read operation ko represent karta hai.

//POST Request => POST request ka use server par naya data create karne ke liye hota hai.
//  Yeh create operation ko represent karta hai.

//PUT Request => PUT request ka use server par existing data ko update karne ke liye hota hai.
//  Yeh update operation ko represent karta hai.

//DELETE Request => DELETE request ka use server se data delete karne ke liye hota hai.
//  Yeh delete operation ko represent karta hai.    

//Fetch API: GET, POST, PUT, DELETE Requests =>

// fetch("https://randomuser.me/api/")
//     .then((rawdata) => {
//         return rawdata.json();

//     })
//     .then(data => {
//         console.log(data.results[0].name.first);
//     })
//     .catch(err => {
//         console.log(err);
//     });


fetch("https://randomuser.me/api/?results=3")
    .then((raw) =>raw.json())
    .then((data) => {
   data.results.forEach(user => {
    console.log(user.name);
   });
   });