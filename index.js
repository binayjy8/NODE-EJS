const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=> {
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    res.send("Hello Khuntapingu");
});

app.listen(port, ()=> {
    console.log(`listening to the port ${port}`);
});