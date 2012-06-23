/*
 * Node.js
 */
var path = require("path");

/*
 * Application-specific
 */
var api = require("./api/usageapi.js");

/*
 * Express
 */
var express = require("express");
var app = express.createServer();
var rootPath = path.join(__dirname, "webapp");

app.use(express["static"](rootPath)); // TODO: avoid reserved word 'static'

app.get("/", function(req, res) {
    res.redirect("/index.html");
});

app.get("/api/signin/:username/:password", function(req, res, next) {
    var username = req.params.username;
    var password = req.params.password;

    console.log(username);
    console.log(password);

    res.contentType("text/json");

    api.signin(username, password, function(error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

app.listen(process.env.PORT || 3000);
