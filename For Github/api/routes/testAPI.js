var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Affordable Solutions to Protect your Home in the Mile High City!");
});

module.exports = router;
