const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res)=> {
    res.send("This is home");
});

app.listen(port, ()=> {
    console.log(`listening to the port ${port}`);
});