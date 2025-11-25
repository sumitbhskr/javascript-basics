// Event & Eventhandling 

// browser mein page par koi bhi harkat karo event rasie ho jaay ga

// kuch screen par ho aur aapko reaction dena ho to us waqt aapko event handle krna aana chhaye

// event ka matlab hota kuch action hua screen pr

//event listener ka matlab hai aapne koi action ka reaction diya

// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function(){
//    h1.style.color = "red";
// });


// select the paragraph  first =>

    // let p = document.querySelector("p");
    // p.addEventListener("click", function(){
    //     p.style.color = "green;"
    // });


//  let p = document.querySelector("p"); 
//  p.addEventListener("dbclick", function(){
//  p.style.color = "yellow";
//  })


///// element.addEventListener("event name", function () {});

// removing eventListener =>

// let p = document.querySelector("p"); 
//     function dbclick(){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick", dbclick);
// p.removeEventListener("dblclick", dbclick);
 

//Common events: click, input, change, submit, mouseover,

// click =>

//let p = document.querySelector("p"); 
//  p.addEventListener("click", function(){
//  p.style.color = "yellow";
//  })


// input => 

//  let input = document.querySelector("input");

// input.addEventListener("input", function () {
//     console.log("typed");
// });

// input =>  check krna h ki kya type hua to =>

// let input = document.querySelector("input");

// input.addEventListener("input", function (data) {
//     if(data !== null){
//     console.log(data);
//     }
// });


//change event => change event tab chalta hai jab aapka koi input
// select ya textarea mein koi change ho jaaye

// let sel = document.querySelector("select")
// let device = document.querySelector("#device")

// sel.addEventListener("change", function(data){
// //  console.log(data.target.value);
// device.textContent = "Device Selected"
//  device.textContent = `${data.target.value} Device Selected`
// });

////////
// let btn =document.querySelector("#btn");
// let fileinp = document.querySelector("#filenip");

// btn.addEventListener("click", function(){
//     fileinp.click();
// });

// fileinp.addEventListener("change", function(dets){
//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name;
//     }
// });  

// Event Object EventTarget,type preventDefult =>

// let a  = document.querySelector(".a"); // class selector
// let b  = document.querySelector(".b");
// let c  = document.querySelector(".c");
// let btn  = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("button clicked");
// });

// c.addEventListener("click", function(){
//     console.log("c clicked");
// });

// b.addEventListener("click", function(){
//     console.log("b clicked");
// });

// a.addEventListener("click", function(){
//     console.log("a clicked");
// }, true); // true → capturing phase



