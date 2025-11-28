// Varible Scope global block, function => 

// scope hai ke aap apne created variables and functions kaha tak
// use kar sakte ho

//line 1 => --varible--

//scope => function scope, global scope and block scope

//function scope => function ke ander hi use ho sakti hai
//global scope => poore code mein kahi bhi use ho sakti hai
//block scope => {} curly braces mein hi use ho sakti hai

// function scope=>
    // function abcd(){
    //     var a  = 12;
    // }

// global scope => agar aapka code kisi bhi {} ke ander nhi to aapka code global hai
    // var a = 12;
 
// block scope =>
// {
//  let a = 12;
// }



// Execution context: memory creation & execution phase =>

// Execution context => javaScrpit sabse pahle jaise hi aapka function dekhta hai sabse pahle 
//javaScript banaata hai execution context, ye ek process hai jo ki do differnet
//phases mein chalta hai, memory phase and doosre ka naam hai exection phase
// ya abstract h 

// function abcd(){
//     var a = 12;
//     let b = 13;
//     let c = 14;
// }

// lexical scope vs dynamic scope => 

// lexical scope => ki app kaha p
//  function abcd(){
//     let a = 12;
//     function defg(){
//         console.log(a);

//     }
//  }

//dynamic scope => kaha se call kr r he ho uspe depend krega  ki kya value milegi


// let a = 12;
// function abcd (){
//     console.log(a);
// }
// function defg(){
//     let a = 13;
//     abcd();
// }
// defg();

//Closure  definition and how variables are presserved =>
    //closure hote hai function jp kisi parent function ke ander ho
   // or ander waale function return ho raha ho  and retyuring function 
  // use kare  parent funtion ka koi varible

//   function abcd(){
//     let a =12;
//     return function (){
//         console.log(a);
//     };
//   }


// advantge and disadvantge =>
    // private varibles
   // global  pollution

//how variables are presserved =>
    // function ke khatam hojaate hai, par jab bhi clouser banta hai to aapka function aur 
   // uske variable ka ek backline bnaya jaata hai or uska naam hota hai[[enviroment]]
  //  function abcd(){
//     let a =12;
//     return function (){
//         console.log(a);
//     };
//   }
//let fnc = abcd();
// fun();

// use case: private counters,encapsulation =>
//     function countForMe(){
//         let c = 0;
//         return function (){
//             c++;
//             console.log(c);
//         };
//     }
// let fnc = countForMe();
// fnc();
// fnc();
// fnc();

// let fnc2 = countForMe();
// fnc2();
// fnc2();
// fnc2();
// fnc2();


//encapsulation =>
//     function clickLimiter(){
//         let click = 0;
//         return function(){
//             click++;
//             if(click < 5){
//                 click++;
//                 console.log(`clicked : ${click} times`);
//             }
//             else{
//                 console.error("LIMIT EXCEEDED, TRY AFTER SOME TIME");
//             }
//         };
//     }
//     let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();


