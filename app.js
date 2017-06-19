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

/*
    Page routes
 */
var r_base              = require("./routes/r_base"),
    r_dashboard         = require("./routes/r_dashboard"),
    r_groups            = require("./routes/r_groups"),
    r_songs             = require("./routes/r_songs");

app.use(r_base);
app.use(r_dashboard);
app.use(r_groups);
app.use(r_songs);

/*
    API Route
 */
var api_groups          = require("./routes/api/api_groups"),
    api_songs           = require("./routes/api/api_songs");

app.use(api_groups);
app.use(api_songs);

//==============================================
//              DEBUG UTILITIES
//==============================================
if(h_app.debug){
    /*
     Database artificial seeding
     */
     function seed() {
         var Group = require("./models/m_group");
         var Song = require("./models/m_song");

         //Creating a bunch of groups
         Group.remove({});
         Song.remove({});
         Group.create([
                {
                     name: "Croozers",
                     members: [
                         {
                             id: "8970lhhhkjhhi9!çèHkhç987lkjlkjh",
                             name: "Renaud",
                             admin: true
                         }
                     ]
                },
                 {
                     name: "Rebirth",
                     members: [
                         {
                             id: "8970lhhhkjhhi9!çèHkhç987lkjlkjh",
                             name: "Renaud",
                             admin: true
                         }
                     ]
                 },
                 {
                     name: "Wad",
                     members: [
                         {
                             id: "8970lhhhkjhhi9!çèHkhç987lkjlkjh",
                             name: "Renaud",
                             admin: true
                         }
                     ]
                 },
                 {
                     name: "Totors",
                     members: [
                         {
                             id: "8970lhhhkjhhi9!çèHkhç987lkjlkjh",
                             name: "Albert",
                             admin: true
                         }
                     ]
                 }
             ], function (err, group) {
             //Creating a bunch of songs
             group.forEach(function(group){
                 Song.create([
                     {
                         title: "Let there be rock",
                         group: "AC/DC",
                         style: "Rock",
                         rating: 3,
                         current: true,
                         last_rehearsal : Date.now(),
                         refGroup: group._id, //TODO
                         sets: [
                             {
                                 id: "07098790879870987987" //TODO
                             }
                         ]
                     },
                     {
                         title: "Sweet home alabama",
                         group: "Lynyrd Skynyrd",
                         style: "Rock",
                         rating: 5,
                         current: true,
                         last_rehearsal : Date.now(),
                         refGroup: group._id, //TODO
                         sets: [
                             {
                                 id: "07098790879870987987" //TODO
                             }
                         ]
                     },
                     {
                         title: "Smoke on the water",
                         group: "Deep Purple",
                         style: "Hard Rock",
                         rating: 4,
                         current: true,
                         last_rehearsal : Date.now(),
                         refGroup: group._id, //TODO
                         sets: [
                             {
                                 id: "07098790879870987987" //TODO
                             }
                         ]
                     }
                 ], function(err, song){

                 });
             });
         });
     }

     //seed();
}

//==============================================
//              STARTING SERVER
//==============================================
app.listen(h_app.app_port, function(){
    console.log("Rediese started.")
});