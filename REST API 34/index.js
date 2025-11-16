// REST => Repersent State Transfer

// REST is an architectural style that defines 
// a set of constraints to be used for creating web services 

// CRUD Operations => Create Read Update Delete 

// GET => retrieves resources
// POST => submits new data to the server
//PUT => updates exixsting data
//PATCH => uodate existing data partially
//DELETE => removes data


// Creating RESTFul APIs = >
// GET            /posts      to get data for all posts     //INDEX route (main)
// POST          /posts       to add a new psot             //Create route
// GET           /posts/:id   to get one post (using id)    //VIEW   route
// PATCH        /posts/:id    to update specific post       // Update route
// DELETE       /posts/:id    to delete specific post       //Destroy


const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "shradhakhapra",
        content: "Hard work is important to achieve success",
    },
    {
        id: uuidv4(),
        username: "sumitbhaskar",
        content: "I got selected for my list internship!",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts/new", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id); 
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;

    let post = posts.find((p) => p.id === id);
    post.content = newContent;  // <-- Update yaha hoga!

    res.redirect("/posts");
});



app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});


app.delete("/posts/:id/", (req, res) => {
    let { id } = req.params;
     posts = posts.filter((p) => id !== p.id);
         res.redirect("/posts");
});


app.listen(port, () => {
    console.log("listing to port : 3000");
});