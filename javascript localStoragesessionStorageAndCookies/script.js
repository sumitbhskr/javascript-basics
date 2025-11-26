// localStorage =>aapke browser ke ander data store karna
//  jo ki browser band hone par bhi delete nahi hoat

// sessionStorage =>ye aapka data temporarily store
//  karta hai matlab ki tab band hua aur data gaya

// cookies =>ye bhi data store karta hai and aapka data
//  browser ke cookies naam ki property mein save hota 
// hai and ye cookie concept kam data ya light data ke liye hota hai  


// localStorage =>
// store kaise kare - setItem
// data fetch kaise kare - getItem
// remove kaise kare - removeItem
//update kaise kare

// localStorage.setItem("name", sumit);

//  let val = localStorage.getItem("name");

// localStorage.removeItem("name");

// cookies => browser mein chhota data store karne ke liye cookies use hoti hai

// 4kb tk ka data store kr skta h cookies m

//localstorage & sessionstorge => 5MB tak ka data store kr skta h

//localstorge m array store nhi kr skta is liy un ko string bna 
// kr store kr te h jab local storge s data vapis nikla t h to string milta hai

//cookies =>, mein jo bhi data store karoge wo 
// data page par automatically server par jaayega

localStorage.setItem("friends", JSON.stringify(["amit", "sumit", "vikash", "Pankaj"]));
