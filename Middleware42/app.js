// Middleware => it is an intermediary

// in Express => Middleware in express are functions that come into play after the server
//receives the request and before the response is sent to the client.

// Middleware => Common middleware functions:
// methodOverride
// bodyPraser
// express.static
// express.urlencoded

const express = require("express");
const app = express();

// app.use((req, res, next) =>{
//    console.log("Hi I am 1st middleware");  
//     next();  
//     console.log("this is after next()");
// });

// app.use((req, res, next) =>{
//    console.log("Hi I am 2nd middleware");  
//     next();  
// });




// //loger -morgen
// app.use((req, res, next) => {
//     req.time = Date.now();
//     console.log(req.method, req.time);
//     next();
// });

app.use("/api", (req, res, next)=>{
    let{token} = req.query;
    if(token === "giveaccess"){
       return next();
    }
    res.send("ACCESS DENIED!");
});

// app.get("/err", (req, res) = {
//     abcd = ab
// });

app.get("admin", (req, res)=>{
    throw new ExpressError(403, "Access to admin is forbideen");
})

app.use((err, req, res, next)=>{
    let {status = 500, message = "Some Error Occurred"} = err;
  res.status(status).send(message);
});


app.get("/api", (req, res) =>{
    res.send("data");
})

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.listen(8080, () => {
    console.log("server listing to port: 8080");

});


// Using next =>  The next middleware function is commonly denoted by a variable named next.
// app.use((req, res, next) => {
//     console.log("time:", Date.now());
//     next()
// })
// it the current middleware function does not end the request-response cycle, it must call
// next() to pass control to the next middleware function.
