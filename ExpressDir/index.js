const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// app.use((req,res) => {
//     console.log("request received");
//     res.send("this is a basic response");
// });



// app.get("/apple", (req,res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req,res) => {
//     res.send("you contacted orange path");
// });


app.get("/", (req,res) => {
    res.send("hello i am root");
});

app.get("/:username/:id", (req,res) => {
    console.log(req.params);
    res.send("hello i am root");
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`<h1>search results for query : ${q}</h1>`);
});