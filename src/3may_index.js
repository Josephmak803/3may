const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("login"); 
});

app.get("/login", (req, res) => {
    res.render("login"); 
});

app.get("/signup", (req, res) => {
    res.render("signup"); 
});

app.get("/personal", (req,res)=>{
    res.render("personal")
});

//user login
app.post("/login", async (req, res) => {
    
        
        res.render("home");
        
    
    
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
});