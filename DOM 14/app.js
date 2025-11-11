// DOM =>(Document Object Model)

const { Children } = require("react");

// the Dom represents a document with a logical Tree. 
// It allows us to manipulate/change website content (HTML elements).

// Selecting Elements => getElementById => Returns  the element as object or null (if not found)

//Selecting Elements => getElementByClassName => Returns  the element as an HTML  Collection or empty collection (if not found)


// let smallImages = document.getElementsByClassName("olding");

// for (let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changes.`);
// }


// Selecting Elements => GetElementByTagName => Return the Elements as an HTML Collection or empty collection (if not found)

// document.getElementsByTagName("p")



// Query Selectors =>
                 // Allow us to use any CSS secector 
// console.dir(document.querySelector("p")); // Selctor first p element // browser m console log s mil ga
document.querySelector("#myId"); // Selctor first element with id = myId
document.querySelector(".myClass"); // Selctor first element with class = myClass
console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll("p")); // Selects all p elements


// Using Properties & Methods=>

// innerText => Shows the visible text contained in a node

// textContent => Shows all the full text

// innerHTML => Shows the full markup 


//Manipulating Attributes =>
    obj.getAttribute(attr)   //geters method

    obj.setAttribute(attr, val)  //seters method

//Manipulating Style =>
    // style Property 
// let links = document.querySelectorAll(".box a");
// for(link of links){
//     link.style.color ="purple";  //inline style
// }

//  ya =>

// let links = document.querySelectorAll(".box a");
// for (let i=0; i<links.length; i++){
//     links[i].Style.color= "yellow"
// }
    //obj.style

// classList.add() to add new classes

// classList.remove() to remove classes

// classList.contains() to check if class exits

// classList.toggle() to toggle between add & remove

//Navigaton =>

    // parentElement =>
          // let h4 = document.querySelector('h4');
         // h4.parentElement   // browser m 

    // Children =>
        // let box = document.querySelector(".box");
        // box.children;   // browser m 

    // pereviousElementSibling / nextElementSibling


// Adding Elements =>
    // document.cretateElement('p')

// appendChild(element)

// append(element)

// prepend(element)

// interstAdjacent(Where, element)


// browser  k liy =>

// document.createElement('p');
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi I am a new p";
// console.dir(newP);
// let body = document.querySelector('body');
// body.append(newP);


//Removing Elements =>
    removeChild(Element)
    remove(Element)






