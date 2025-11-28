 // object  =>

    // let obj ={
    //     name:"harsh",
    //     age:26,
    //     khaana:"daal chaawal"
    // };

    // obj.age
    //  ya
    //obj['age']

// key value pairs =>
    // example=>
    // let obj = {
    //     name: "sumit"
    // }

//nesting and deep access =>
//     const user = {
//         address:{
//             city: "Pilani",
//             pin: 303331,
//             location: {
//                 lat: 23.2,
//                 lng: 77.4,
//             },
//         },
//     };
// console.log(user.address.location.lng); // 77.4


// let{lat,lng} =User.address.loctions;
 // output => user.address.loction.lng:


 //Looping for-in, object.keys, object.entries =>

    // let obj = {
    //     name: "harsh",
    //     age:26,
    //     email: "test@test.com",
    // };

    // for (let key in obj){
    //     console.log(key);
    //        ya
    //     console.log(key, obj[key]);
    //
    // }      output => name age email

// object.keys =>
    // let obj ={
    //     name:"sumit",
    //     age:24,
    //     email:"test@test.com",
    // };
   // console.log(Object.keys(obj));
    // ya full data
    //console.log(Object.entries(obj));

//copying objects spread, Object.assign, deep clone

// let obj ={
//      name:"sumit",
//          age:24,
//         email:"test@test.com",
// };
// let obj2 = {...obj};
// console.log(obj2);


//Object.assign => copy kr n k kaam aata h (...obj) ki trha


//Deep cloning =>
//     let obj ={
//       name:"sumit",
//           age:24,
//          email:"test@test.com",
//  };
 
//  console.log(JSON.parse(JSON.stringify(obj)));

//Q1:=> Create an object for a student with name, age, and isEnrolled.
// let obj = {
//     name:"Sumit",
//     age:24,
//     isEnrolled: true,
// }

// Q2: Can an object key be a number or boolean? Try this
// const obj ={
//     true: "yes",
//     42:"answer",
// };
// console.log(obj[true]);

//Q3: Access the value of "first-name" from this object:
// const user = {
//     "first-name": "Sumti"
// };
// user["first-name"]

//Q4: Given a dynamic key let key = "age", how will you access user [key]?
// let key = "age";
// const user = {
//     age:26,

// };
// user[key]
