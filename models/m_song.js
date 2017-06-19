//==============================================
//              SONG MODEL
//==============================================
var mongoose = require("../lib/helper/h_db").mongoose;

var songSchema = new mongoose.Schema({
    title: String,
    group: String,
    style: String,
    rating: { type: Number, min: 0, max: 5 },
    current: Boolean,
    last_rehearsal : Date,
    refGroup: String, //TODO
    sets: [
        {
            id: String //TODO
        }
    ]
});

module.exports = mongoose.model("Song", songSchema);