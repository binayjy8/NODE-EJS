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

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
});

app.get("/rolldice", (req, res) => {
    let value = Math.floor(Math.random() * 6 ) + 1 ;
    res.render("rolldice.ejs", {value});
});

app.listen(port, ()=> {
    console.log(`listening to the port ${port}`);
});