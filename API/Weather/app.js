const express = require("express");
const https = require("https");
const app = express();


app.get("/", function (req, res) {

    const url = "https://v2.jokeapi.dev/joke/Any";
    https.get(url, function (response) {

        response.on("data", function (data) {
            const weatherdata = JSON.parse(data);
            const joke = weatherdata.setup;
            res.send("joke:"+joke +"<br>"+weatherdata.delivery);
        })
    })
})












app.listen(2000);