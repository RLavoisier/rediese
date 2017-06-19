//==============================================
//              GROUP MODEL
//==============================================
var mongoose = require("../lib/helper/h_db").mongoose;
/*
       Group Schema
 */

var groupSchema = new mongoose.Schema({
    name: String,
    members: [
        {
            id: String,
            name: String,
            admin: Boolean
        }
    ]
});

module.exports = mongoose.model("Group", groupSchema);

