// Extracting From Data =>
//     let form = document.querySelector("form");


// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir()

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.dir(user.value);
//     console.dir(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// More Events =>
// change event =>
//input event =>

// change event =>the changes event when the  value of an element has been changed (only works on <input>, <textarea> and <select>elements)

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
});
let user = document.querySelector("#user");

user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value = ", this.value);
    
});

user.addEventListener("input", function () {
    console.log("input event");
    console.log("final value =", this.value);
    
})
//input event =>the input  event fires when the value of an <input>, <select>, or <textarea> element has been changed.

