//==============================================
//              DB APP
// Database helper functions and properties
//
//==============================================
var mongoose            = require("mongoose"),
    Group               = require('../../models/m_group');

module.exports = {
    //==========================================
    //              PROPERTIES
    //==========================================
    /*
        APP database adress
     */
    db_adress: "mongodb://localhost/rediese",
    /*
        APP database adress
     */
    db: null,
    //==========================================
    //              METHODES
    //==========================================
    /*
        Database connection
     */
    connect: function() {
        this.db = mongoose.connect(this.db_adress);
    },
    /*
        Database artificial seeding
     */
    seed: function(){
        Group.create({
            name: "Les totors",
            members: [
                {
                    id: "lkjlkjlkjljljlj!çèHkhç987lkjlkjh",
                    name: "Alfred",
                    admin: true
                }
            ]
        }, function(err, user){});
    }
};