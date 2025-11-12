// let btn = document.querySelector("button");

// // btn.addEventListener("click", function(event) {
// //     console.log(event);
// //  console.log("button clicked");

// // });

// ya =>mouse pointer browser console

//let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//  console.log("button clicked");

// });

// keyboard =>
let inp = document.querySelector("input");

inp.addEventListener("keydown", function () {
  console.log("key =", event.key);
  console.log("code =", event.code);

  console.log("key was pressed");
});

// let inp = document.querySelector("input");

//    inp.addEventListener("keyup", function () {
//     console.log("key was pressed");
//    });


// form events =>
// let form = document.querySelector("from");
// from.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("from submitted");
// });