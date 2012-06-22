var express = require("express");
var api = require("./api/usageapi.js");

var app = express.createServer();

app.get("/", function(req, res) {
	res.send("Hello, Hello.");
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

    api.signin(username, password, function(error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.listen(process.env.PORT || 3000);
