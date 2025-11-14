// Promises => let's apply promises to our callback hell.

h1 = document.querySelector("h1");

function changeColor(color, deley){
    return new Promise((resolve, reject) => {   
    setTimeout(() => {
        h1.style.color = color;
        resolve("color changed!");
    }, deley); 
    });
}

changeColor("red", 1000)
.then(()=> {
    console.log("red color waas completed");
    return changeColor("orange", 1000)
})
.then(()=> {
    console.log("orange color waas completed");
    return changeColor("green", 1000)
})
.then(()=> {
    console.log("green color waas completed");
    return changeColor("blue", 1000)
})
.then(()=> {
    console.log("blue color waas completed");
});