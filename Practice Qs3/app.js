// Qs1 Create a nuber variable num with some value 
//  Now, print "good" if the number is divisible by 10 and print "bad" if it is Notification. =>

let num =20;

if(num % 10 == 0){
    console.log("good");
}
else {
    console.log("bad");
}


//Q2 Take the user's name & age as input using prompts.
//   then return back the following statement to the user as an alert(by substituting their name & age):
//   name is age years old 

//   [Use template Literals to print this sentence] =>

    // let name = prompt("please enter your name");
    // let age =prompt("Please enter your age");
    // alert(`${name} is ${age} years old.`); 


//Q3 Write a program to find the largest of 3 numbers=>

let a = 4;
let b = 9;
let c = 14;

if (a > b && a > c) {
    console.log(a, "is largest");
} else if (b > c) {
    console.log(b, "is largest");
} else {
    console.log(c, "is largest");
}



