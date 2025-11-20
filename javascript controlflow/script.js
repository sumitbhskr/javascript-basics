// if else else-if 
// switch case 
// early return pattern

// write a function getGrade(score) that:
//    takes a student's marks (0 to 100)
//    Return the garde based on this logic;
// 90 -100 A+
// 80 -89 B
// 70 -79 C
// 60 -69 D
// 33 -59 E
// 0 -32  Fail
// Anything         Invaild marks


// function getGrade(score){
//     if(score >= 90 && score <= 100){
//         return "A";
//     }
//     else if(score >= 80 && score <=  89){
//          return "B";
// }
//     else if(score >= 70 && score <=  79){
//          return "C";
// }
//     else if(score >= 60 && score <=  69){
//          return "D";
// }
//     else if(score >= 33 && score <= 59){
//          return "E";
// }
//     else if(score >= 0 && score <= 32){ 
//         return "Fail";
// }
//     else {
//         return "Invaild marks";
//     }
// }
// console.log(getGrade(78));


// function getGrade(score) {
// if(score >= 90 && score <= 100) return "A";
// if(score >= 80 && score <=  89) return "B";
// if(score >= 70 && score <=  79) return "C";
// if(score >= 60 && score <=  69) return "D"
// if(score >= 33 && score <= 59)  return "E";
// if(score >=  0 && score <= 32)  return "Fail";
//   return "Invaild marks";
// }
// console.log(getGrade(54));
       

//  2Qeustion =>
// Rock-paper-scissors logic

// function rps(user, computer){
//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "scissor" && computer === "rock") return "computer";
//     if(user === "paper" && computer === "rock") return "user";
//     if(user === "rock" && computer === "paper") return "computer";
//     if(user === "scissor" && computer === "rock") return "computer";
// }
// rps("rock", "scissor");