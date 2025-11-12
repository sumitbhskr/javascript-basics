// DOM Events => Events are signals that something has occurred. (user inputs / actions)

// onclick(when an element is clicked)
// onmouseseenter(when mouse enters an element)

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
// };

// onclick=> (when an element is clicked) =>

// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     btn.onclick = sayHello;
// }
// function sayHello(){
//     alert("Hello!");
// }

// onmouseseenter(when mouse enters an element) =>

// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     btn.onclick = sayHello;
//     console.log(btn);

// }
// function sayHello(){
//     alert("Hello!");
// }

//Event Listener =>  addEventListener=>
// syntax => element.addEventListener(event, callback)

// let btns = document.querySelectorAll('button');

// for(btn of btns){

// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", sayName);
// }

// function sayHello(){
//     alert("hello");
// }
// function sayName(){
//     alert("Apna College");
// }

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
  console.log(this.innerText);
  this.style.backgroundColor = "blue";
}
btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);
