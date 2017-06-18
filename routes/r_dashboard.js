//==============================================
//              DASHBORD ROUTE
//==============================================
var express                 = require("express");
var dashboard_router        = express.Router();

dashboard_router.route("/dashboard")
    .get(function(req, res){
        console.log(res.locals.app_title);
        res.render("v_dashboard");
    });

module.exports = dashboard_router;

