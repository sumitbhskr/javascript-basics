// / Get & Post Requests 
// Get => Used to GET some response
// Data sent in query strings (limited, strings data & visible in URL)

// POST => Used to POST somthing(for Create/Write/Update)
//Data sent via request body(any type of data)


const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.get("/register", (req, res) => {
     let { user, password } = req.query;
    res.send(`standard GET response.Welcome ${user}!`);
});


// Handling Post requests =>
    // Set up Post route to get some response 
   //Parse Post request data

app.post("/register", (req, res) => {
        let { user, password } = req.body;
    res.send(`standard POST response.Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});