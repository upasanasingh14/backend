const express = require("express");
const { console } = require("inspector");
const app = express();
const path = require("path");

const port = 8081;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.get("/rolldice", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { num : diceVal } );
});

app.get("/ig/:username", (req,res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];

    if(data){
        res.render("insta.ejs", { data });
    } else {
        res.render("error.ejs");
    }
    
});

app.listen(port, ()=>
{
    console.log(`listening on port ${port}`);
});