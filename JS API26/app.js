// API => Application Programming Interface 

// JSON => JavaScript object Notstion website (www.json.org)

// JSON => Accessing Data from JSON
// JSON.parse(data)
// To parse a sting data into a JS object

// let jsonRes =
//      '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';
//      let validRes = JSON.parse(jsonRes);
//      console.log(validRes);
     
//JSON.stringify(json)Method
// To parse a JS object data into JSON 

// let student = {
//     name: "sumit",
//     marks: 95,
// };

// let jsonData = JSON.stringify(student);
// console.log(jsonData);

// Testing API requests => 
// 1 Hoppscoth 
// 2 Postman

//Ajax => Asynchronous JavaScript and XML

//Http Verbs => example: 
// GET 
// POST 
// DELETE


//Status Codes =>example;
// 200-ok
// 404-NOT found
// 400-Bad Reuest
// 500-Internal Server Error


//Add information in URLs =>
    // Query Strings=>
// Http headers => header, value


//Our First Requset => using Fetch

let url ="https://catfact.ninja/fact";

fetch(url)
.then((res) => {   
    return res.json();
})
.then((data) => {
    console.log("data1 =", data.fact);
    return fetch(url); 
})
.then((res) => {
    return res.json();
})
.then((data2) => {
    console.log("data2 =", data2.fact);
    
})
.catch((err) => {
    console.log("ERROR -", err);  
});