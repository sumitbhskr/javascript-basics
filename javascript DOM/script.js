// DOM => webpage jo hum dekht vo DOM ka part hota h 

// const { document } = require("postcss");

//DOM => Tree structure: node,element, text, comment


//dom mainipulation =>
// html se element select karna
// text badalna
//html badalna
//css badalna
//attribute badalna
//event listeners add krna


// Selecting elements:getElementByid,getElementByClassName, querySelector, querySelectorAll

// let abcd = document.getElementById("abcd");
// console.log(abcd);


// let abcd = document.querySelector("h1");

// Attrubute mainpulition =>

// let img = document.querySelector("img");
// img.setAttribute("src",
//     "https://pixy.org/src/477/4774988.jpg"
// );

//getAttrubute, setAttribute, removeAttribute =>

//     let a = document.querySelector("a");
//   console.log ( a.getAttribute("href"));

//  removeAttribute =>
//      let a = document.querySelector("a");
//      a.removeAttribute("href");


//Dynamic DOM mainpulation: createElement, appendChild, removeChild, prepend =>

// createElement =>

// append / prepend karo jaha bhi element chahiye waha=>

//    let h1 = document.createElement("h1");
//    h1.textContent = "Hello.ji";  //h1.textContent = "hello brother"
//    document.body.append(h1); // ya document.querySelector("body").append(h1) // ya prepend

// let h1 = document.querySelector("h1");
// h1.remove();


// let h1 = document.createElement("h1");
// h1.textContent = "how are you bro"

// document.querySelector("div").appendChild(h1);
//ya
// document.querySelector("div").prepend(h1);


// style updates via.style and classList(add, remove, toggle) =>

// javascript s css badlana >

// let h1 = document.querySelector("h1");

// h1.style.color = "white";
// h1.style.backgroundColor = "red";
// h1.style.fontFamily = "Gilroy";
// h1.style.textTransform = "capitalize";

// console.dir(h1)

// javascript s class haty or laagy kis trha =>

// let h1 = document.querySelector("h1");
// h1.classList.add("hiii") //  remove k liy =>  h1.classList.remove("hiii")
// console.dir(h1)

// Q1 What is the DOM? How  it repersent the HTML structure?

//Q2 Name the types of nodes in the DOM tree.

//Q3 What's the difference between an element node add a text node?

//Q4 Inspect the following HTML in the browser and identify each node: =>

//Q5 What is the differnce between getElementById and querySelector?
//getElementById => id selcet krta h
//querySelector => multipul purpuse k liy hota h id selcet kr skta h and class selcet kr skta h


//Q6 What does getElementByClassName return? Is it an array?

//Q7 Use querySelectorAll to select all buttons with class".buy-now".

//Q8 Task T1: Select the heading of a page by ID and change its text to "Welcome to Bhaskar!".
//  ans =>
// let heading = document.querySelector(".heading");
// heading.textContent ="Welocome to javaScript"


//Q9 select all <li> elements and print their using a loop.

// // ans =>
//  let lis = document.querySelectorAll("li");
// lis.forEach(function(val){
//     console.log(val.textContent);
// });

//   ya

// let lis = document.querySelectorAll("li");
// for(let i = 0; i<lis.length; i++){
//     console.log(lis[i].textContent);
// }

//Q10 What's the difference between innerText, textContent, and innerHTML?


// h1.textContent = "<i>"
// h1.innerhtml = "<i>"

//Q11 When should you use textContent instead of innerText?

// ans => textContent = saara content nikalta h or innerText s fast h
// innerText=> slower h and vo content hi nikalta h jo visbale h

// Q12  Select a paragraph and replace its content with:
// {<b>Update</b> by Javascript }

// let p = document.querySelector("p");

// p.innerHTML = "<b>Update</b> by Javascript";


//Q13 How do you get the src of an image using JavaScript?
//  let img = document.querySelector("img");
//  console.log(img.src);

//  ya

// let img = document.querySelector("img");
// console.log(img.getAttribute("src"))


//Q14 What does setAttribute() do?
// document.querySelector("img").setAttribute("src", "https://www.petmd.com/sites/default/files/small-dog-breeds.jpg")

//Q15 Add a tiilte attribute to a div dynamically.

