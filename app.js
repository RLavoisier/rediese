//==============================================
//              EXPRESS SETUP
//==============================================
var express             = require("express"),
    app                 = express();

//==============================================
//              HELPERS LOADING
//==============================================
var h_app               = require("./lib/helper/h_app"),
    h_db                = require("./lib/helper/h_db");

//==============================================
//               APP CONFIG
//==============================================
h_app.init(app);
h_app.initMiddlewares(app);

//==============================================
//              MONGOOSE CONNECTION
//==============================================
h_db.connect();
//h_db.seed();

//==============================================
//                  ROUTES
//==============================================
var r_dashboard         = require("./routes/r_dashboard"),
    r_group             = require("./routes/r_group");

app.use(r_dashboard);
app.use(r_group);

//==============================================
//              STARTING SERVER
//==============================================
app.listen(h_app.app_port, function(){
    console.log("Rediese started.")
});