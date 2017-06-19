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

var r_base              = require("./routes/r_base"),
    r_dashboard         = require("./routes/r_dashboard"),
    r_group             = require("./routes/r_group");

app.use(r_base);
app.use(r_dashboard);
app.use(r_group);

//==============================================
//              DEBUG UTILITIES
//==============================================
if(h_app.debug){
    /*
     Database artificial seeding
     */
     function seed() {
         var Group = require("./models/m_group");
         Group.create({
             name: "Croozers",
             members: [
                 {
                     id: "8970lhhhkjhhi9!çèHkhç987lkjlkjh",
                     name: "Renaud",
                     admin: true
                 }
             ]
         }, function (err, user) {
         });
     };

     seed();
}

//==============================================
//              STARTING SERVER
//==============================================
app.listen(h_app.app_port, function(){
    console.log("Rediese started.")
});