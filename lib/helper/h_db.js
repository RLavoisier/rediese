//==============================================
//              DB APP
// Database helper functions and properties
//
//==============================================
var Group               = require('../../models/m_group');

module.exports = {
    //==========================================
    //              PROPERTIES
    //==========================================
    /*
        Mongoose module
     */

    mongoose: require("mongoose"),
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
        this.db = this.mongoose.connect(this.db_adress);
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