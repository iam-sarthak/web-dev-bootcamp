const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname +"/index.html");

})

app.post("/", function (req, res) {
    var height = req.body.height;
    var weight = req.body.weight;
    res.send(`<h1>your BMI is ${height/(weight*weight)}</h1>`);
})

app.listen(4000);