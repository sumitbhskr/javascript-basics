// Promises => The Promises object repersent the eventual completion (or failure) of
//  an asynchronous opertion and its resulting value

// callback hell code =>
// function saveDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) * 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveDb(
//     "apna college",
//     () => {
//         console.log("success: your data was saved");
//         saveDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 saveDb("sumit",
//                     () => {
//                         console.log("suceess3: data saved");
//                     },
//                     () => {
//                         console.log("failure2 : weak connection");
//                     }
//                 )
//             },
//             () => {
//                 console.log("failure2: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );


// Promises => promise ek object h 
// Promises => resolve & reject

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) * 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    })
}
console.log(savetoDb("apna college"));


//Promises => then() & catch()

// savetoDb("apna college")
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
//   });


// Promise Chaining => improved version


savetoDb("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("helloworld"); // ✅ correct spelling
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("sumit"); // ✅ correct spelling
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });



//Promises  are rejected and resolved with some data (valid results or errors)

