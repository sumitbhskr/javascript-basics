// Revisting JS=>
// Object Oriented Programming =>
// To structure our code 
// prototype 
//New Operator
//constructors
//classes
//keywords(extends, super)


//Object prototype  =>
// Prototypes are the mechansim by which javascript objects inherit features from one another. 
// it is like a single template object that all object that all object inherit methods and properties 
// from without having their own copy

//arr._proto_(refernce)
//Array.prototype(actual object)
//String.prototype

//Every object in javaScript has a built-in property, which is called its protype.
// The prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain. The chain ends when we reach a prototype
// that has null for its own prototype. 

// let arr = [1, 2, 3];
// arr.sayHello = () => {
//     console.log("hello!, i am arr");
// };
// arr.push(4);

// Factory Functions => A function that creates objects

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);

//         },
//     };
//     return person;
// }
// let p1 = PersonMaker("adam", 25);//copy
// let p2 = PersonMaker("eve", 25);//copy

//constructors=>doesn't return anything & start with capital latter

// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }

// Person.prototype.talk = function (){
//     console.log(`Hi, ,my name is ${this.name}`);

// }

// New operator=> the new operator lets develpoers create an instance of user-defined object type
// or of one of the built-in object types that has a constructor function. 
// let P1 = new Person("adam", 25);
// let P2 = new Person("eve", 25);

// Classes => Classes are a template for creating objects

// The constructor method is a special method of a class for creating and initializing an
// object instance of that class

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, ,my name is ${this.name}`);
//     }
// }
// let P1 = new Person("adam", 25);
// let P2 = new Person("eve", 25);

//Inheritance => inheritance is a mechanism that allows us to create new classes on the basis of 
// alerady existing classes.

class Person {
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, ,my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructor");

        super(name, age); //parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); //parent class constructor is being called
        this.subject = subject;
    }
}
let stu2 = new Teacher("adam", 25, "95"); // browser console
let t1 = new Teacher("even", 25, "engilsh"); // browser console



//Inheritance => second example 
class Mammal {
    //base class ya parent class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log(" I am eating");

    }
}
class Dog extends Mammal {
    //child
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wolff..");
    }
    eat() {
        console.log(" dog is eating");

    }
}


class cat extends Mammal {
    //child
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow..");

    }
}