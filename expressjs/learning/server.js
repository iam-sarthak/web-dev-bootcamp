const express = require("express");

const app = express();

// app.get("/", function (req, res) {
//     console.log(req);    
// })
app.get("/", function (req, res) {
    res.send("<h1>Hello broo!!!!!!!</h1>")   
})

app.get("/contact", function (req, res) {
    res.send("<h1>Hello broo!!!!!!! I am Contact Page.</h1>")   
})

app.listen(3000, function () {
    console.log("server started");
});