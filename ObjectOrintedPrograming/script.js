// function CreateBiscuits() {
//     this.name = "ParleG";
//     this.price =5;
//     this.qty =8;
//     this.company = "Parle";
//     this.category = "regular";
// }


// let biscuit1 = new CreateBiscuits();


// humein seekhna hai ki factory banaaba, matlab ki app ek baar bluprint bana do
// ki har object kaise dikhega, and hum log naye naye objects with different values bana
// paayege, yahi uper  uper se poora kaam hai OOPS mein

// function CreatePencil(name,price,color, comapny){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.comapny = comapny;
// }
// let pencil1 = new CreatePencil("Nataraj", 10, "yellow", "nataraj");
// let pencil2 = new CreatePencil("Doms", 10, "white", "doms");


//  Constructor function (ka first letter captial hoan chahaiye) =>

// function CreatePencil(name,price,color, comapny){
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.comapny = comapny;
//     this.write = function(){
//         let h1 = document.createElement("h1");

//         h1.textContent = "text";
//         h1.style.color = color;
//         document.body.append(h1);
//     };
// }
// let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
// let pencil2 = new CreatePencil("Doms", 10, "red", "doms");    /// output pencil1.write(jo kuch likna chao aap)




// prototype => shard memory
// hum log chahate hai ki write function har object ke sath na jaye, balki ek baar hi jaye
// aur sabhi objects usi function ko use karein, iske liye hum log prototype ka use karte hai 

// agar tumhaara constroctor function koi filed apne prototype par attach kale to us constroctor
// se bnne waale sabhi new instances yaani ki objects ke pass wo filed automatically chali jaati hai

// function CreatePencil(name,price,color, comapny){
//     this.name = name;
//     this.price = price;
//     this.color = color;   
//     this.write = function(){
//         let h1 = document.createElement("h1");

//         h1.textContent = "text";
//         h1.style.color = color;
//         document.body.append(h1);
//     };
// }
// CreatePencil.prototype.company = "Sheryains";

// let pencil1 = new CreatePencil("Nataraj", 10, "black", );
// let pencil2 = new CreatePencil("Doms", 10, "red",);

//output => pencil1.company = "Sheryains";


// function CreatePencil(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color; 
//     this.company = company;
// }

// CreatePencil.prototype.write = function(text) {
//     let h1 = document.createElement("h1"); 
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.append(h1);
// };
// let pencil1 = new CreatePencil("Nataraj", 10, "black", "Sheryains");
// let pencil2 = new CreatePencil("Doms", 10, "red", "Sheryains");

//  output => pencil1.write("Hello World")



// Classes =>

// class CreatePencil {
//     constructor(name, price, color, company) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//         this.company = company;

//     }
//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);
//     }

// }

// let p1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
// let p2 = new CreatePencil("Doms", 30, "red", "dom");


//class erase() => 

// class CreatePencil {
//     constructor(name, price, color, company) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//         this.company = company;

//     }
//     erase(){
//         document.body.querySelectorAll("h1").forEach((elem) => {
//             if(elem.style.color === this.color){
//                 elem.remove();
//             }
//         });
//     }
//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.append(h1);
//     }

// }

// let p1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
// let p2 = new CreatePencil("Doms", 30, "red", "dom");


// output=>p1.erase()
// undefined
// p1.write("hello")
// undefined
// p1.erase()
// undefined




//extends & super =>  c


// class User {
//     constructor(name, address, username, email, role) {
//         this.name = name;
//         this.address = address;
//         this.username = username;
//         this.email = email;

//     }
//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = `${this.name} : ${text}`;
//         document.body.appendChild(h1);


//     }
// }
//        class Admin extends User {
//     constructor(name, address, username, email) {
//         super(name, address, username, email);
//         this.role = "admin";
//     }
//     remove() {
//         document.body.querySelectorAll("h1").forEach(function (elem) {
//             elem.remove();

//         });
//     }
// }


// let u1 = new User("Sumit", "pilani", "async123", "Sumit@.com")
// let u2 = new User("Rahul", "jaipur", "async456", "Rahul@.com")
// let a1 = new Admin("Admin", "delhi", "admin123", "admin@.com")



//clasical inheritance => java javascript cpp m bi hota hai
//classical inheritance => classes banana and un classes ko extend karna    
//prototypal inheritance => ek object se dusre object ko inherit karna

let coffee = {
    color: "brown",

    price: 100,
    drink: function() {
        console.log("gut gut  gut");
    },
};
let arabitaCoffee = Object.create(coffee);
arabitaCoffee.taste = "bitter";
arabitaCoffee.drink();
