//==============================================
//              BASE ROUTES
//==============================================
var express                 = require("express");
var base_router             = express.Router();

base_router.route("/")
    .get(function(req, res){
        res.redirect("/dashboard");
    });

module.exports = base_router;

