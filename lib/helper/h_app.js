//==============================================
//              HELPER APP
// Gère les paramètres généraux et des fonction
// de paramétrage
//==============================================
var express     = require("express"),
    bodyParser  = require("body-parser");

module.exports = {
    //==========================================
    //              PROPERTIES
    //==========================================
    /*
         Debug flag
     */
    debug: false,
    /*
        Listening Port
     */
    app_port: 3000,
    /*
         APP Title
     */
    app_title: "D#",
    //==========================================
    //              METHODES
    //==========================================

    /*
           Initialising app parameters
     */
    init: function(app){
        //View engine
        app.set("view engine", "ejs");
        //public rep
        app.use(express.static("public"));
        //Body parser INIT
        app.use(bodyParser.urlencoded({ extended: true }));
    },

    /*
            Initialising middlewares
     */
    initMiddlewares: function(app){
        /*
            INIT app variables for the front end
         */
        //getting a pointer to this object
        //because the scope will be different in the middleware
        var h_app = this;
        app.use(function(req, res, next){
            res.locals.app_title = h_app.app_title;
            next();
        });
        /*
            DEBUG : adding a test user to the req object on
         */
        app.use(function(req, res, next){
            req.user = {
                username:   "Renaud",
                _id:        "8970lhhhkjhhi9!çèHkhç987lkjlkjh"
            };
            next();
        });
    }
};