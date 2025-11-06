// Qs A "good string" is a string that starts with the latter 'a' & has a length >3. Write 
// a program to find if a string is good or not 

let str = "apple";          //output =>  good string

// let str = "app"         //output => note a good string
// let str = "snake"      //output => note a good string

if ((str[0] == "a") && (str.length > 3)) {
    console.log("good string");
} else {
    console.log("not a good string");

}





// QS Predict the output of following code .=>

let num = 12;
if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}                          // output => safe


// Swtich Statement =>

// Q3 Practice Qs  Use switch statement to print the day of the week using a number variable 'day'
// with
// values 1 to 7
// 1= Monady, 2 = Tuesday & so on 

let day = 1;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.loga("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunady, run day");
        break;
    default:
        console.log("wrong day");

}