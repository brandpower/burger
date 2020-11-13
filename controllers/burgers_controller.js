//call in our express, burgers file and router just for fun but also so the code works kids 
var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

//Break these down into 3 functions: get, post and put. Trust me it makes the brain work way easier

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});


router.post("/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [
        req.body.burger_name,
    ], function (data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect("/");
    });
});

module.exports = router;