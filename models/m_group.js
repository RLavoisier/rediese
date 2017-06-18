//==============================================
//              GROUP MODEL
//==============================================
var mongoose = require("mongoose");

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

