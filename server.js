var express = require("express");
var ws = require("./zenws/usagews.js");

var app = express.createServer();

app.get("/", function(req, res) {
	res.send("Hello, World.");
});

app.get("/api/signin/:username/:password", function(req, res, next) {
    var username = req.params.username;
    var password = req.params.password;

    console.log(username);
    console.log(password);

    res.contentType("text/json");

    /*
    res.send({
        username: username,
        password: password
    });
    */
    
    // username = "alanjgorton@googlemail.com";
    // password = "p4ssword";

    ws.signin(username, password, function(error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.listen(process.env.PORT || 3000);
