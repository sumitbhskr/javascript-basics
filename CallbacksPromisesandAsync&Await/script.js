// Synchronous vs asynchronous => 
// synchronous => line by line execution
// asynchronous => line by line execution not guaranteed    

// callback pattern and callback hell =>
// callback => function passed as an argument to another function
// callback hell => multiple nested callbacks making code hard to read and maintain

// promises => object representing the eventual completion or failure of an asynchronous operation
// states => pending, fulfilled, rejected   

// async/await => syntactic sugar over promises, making asynchronous code look and behave like synchronous code
// async => function that returns a promise
// await => pauses the execution of an async function until a promise is resolved       



//callback pattern and callback hell =>

// function kuchhderbaadChaluga(val){
//     setTimeout(()=>{
//         console.log(val);
//     },2000);
// }

// kuchhderbaadChaluga("1223");

// //  ya

// function kuchhderbaadChaluga(val){
//     setTimeout(()=>{
//         console.log(val);
//     },Math.floor(Math.random()*10) * 1000);
// }

// kuchhderbaadChaluga("12");

//  ya


// callback=> ek fuction ko ager aap ek aur function behj de rhe ho parameter
//mein, to wo parameter wala function kehlata hai callback function.

// function kuchhderbaadChaluga(fnc){
//     setTimeout(fnc,Math.floor(Math.random()*10) * 1000);
// }

// kuchhderbaadChaluga(function(){
//     console.log("hello");
// });


// callback hell => ek callback ke andar dusra callback aur uske andar teesra callback
// aur aise hi chalta rahe, jisse code samajhna mushkil ho jata hai.

// function profileLekarAao(username, cb){
//     setTimeout(()=>{
//    console.log(`profile aagaya ${username}`);
//       cb({username});
// },2000);
// }
// function saarePosts(id, cb){
//     setTimeout(()=>{
//      cb({ _id: id, posts: ["post1", "post2", "post3"] });   
//     },2000);
// }
// profileLekarAao("rohit", function(data){
//     console.log(data);
//     saarePosts(data._id, function(posts){
//         console.log(posts);

//     });
// });


// promises :resolves, rejects, then, catch => promise ek object hai jo asynchronous operation ke
// result ko represent karta hai. iske 3 states hote hain: pending, fulfilled, rejected.  

// ek promise create karne ke liye, hum new Promise() constructor ka use karte hain, jo ek function
// leta hai jisme do parameters hote hain: resolve aur reject. agar asynchronous operation successful
// hota hai, to hum resolve() function ko call karte hain, aur agar operation fail hota hai, to hum 
// reject() function ko call karte hain.

// let pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         //    resolve("Sumit");
//         let rn = Math.floor(Math.random() * 10);
//         if (rn > 5) {
//             resolve(rn);
//         } else reject(rn);
//     }, 2000);
// });

// pr.then(function (val) {
//     console.log(val);
// })
//     .catch(function (val) {
//         console.log(val);
//     });

// promise ke result ko handle karne ke liye, hum .then() aur .catch() methods ka use karte hain.
// .then() method tab call hota hai jab promise resolve hota hai, aur .catch() method tab call hota hai
// jab promise reject hota hai.


// async/await => async/await promises ka ek syntactic sugar hai, jo asynchronous code ko synchronous
// code jaisa banata hai. async function wo function hota hai jisme hum await keyword ka use karte hain.
// await keyword ek promise ke resolve hone tak function ke execution ko pause kar deta hai.    
// async function ke andar hum await keyword ka use karke kisi bhi promise ke result ka wait kar sakte hain,
// bina .then() ya .catch() methods ka use kiye.

// Chaining async operations => chainning async operations ka matlab hai ek async operation ke complete hone ke baad
// dusra async operation start karna. isse hum multiple async operations ko sequentially execute kar sakte hain.    

// async /await =>
    let pr = new Promise(function (resolve, reject) {
        setTimeout(() => {
            //    resolve("Sumit");
            let rn = Math.floor(Math.random() * 10);    
            if (rn > 5) {
                resolve(rn);
            } else reject(rn);
        }, 2000);
    });
        async function abcd(){
            try{
                let val = await pr;
                console.log(val);
            } catch (error) {
                console.log(error);
            }
        }
        abcd();
// async function ke andar hum try/catch block ka use karke errors ko handle kar sakte hain, bina .catch() method ka use kiye.  