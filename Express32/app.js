// library V/s Framework =>

// library => A library is a collection of pre-written
// code that can be used to perform specific tasks ex = axios

//Framework => A framework is a set of pre-written code that provides
// a structure for developig software applications eg => express

// Express => A Node.js web applictions framework that helps us make web applications it
//is used for server side programming

// 1 listen for incoming request
// 2 pars karta in request  data ko
// 3 to match response with routes
// 4 response

const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

// app.use =>
// app.use((req, res) => {
//     console.log(req);
//     console.log("request received ");
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

// Routing => it is process of selecting a path for
// traffic in a network or between or across multipe networks.

// app.get("/", (req, res) => {
//     res.send("you contacted root path");
// })

app.get("/apple", (req, res) => {
    res.send("you contacted apple");
})

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// })

// app.post("/", (req, res) => {
//     res.send("you sent  a post request to root");
// })

//Nodemon => to automatically restart server with code changes.

//patg

app.get("/", (req, res) => {
  res.send("you contacted orange path");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlstr = `<h1>welcome to the page of @${username}!</h1>`;
  res.send(htmlstr);
});

//query string =>
app.get("/search", (req, res) => {
  let { q } = req.query; 
  if (!q) {
    res.send("<h1>Nothing searched!</h1>");
  } else {
    res.send(`<h1>Search results for query: ${q}</h1>`);
  }
});
