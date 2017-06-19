//==============================================
//              SONGS ROUTES
//                 RESTFUL
//==============================================

var express         = require("express"),
    songs_router    = express.Router(),
    h_dbreq         = require("../lib/helper/h_dbreq"),
    h_resp          = require("../lib/helper/h_resp"),
    h_error         = require("../lib/helper/h_error");

/*
 INDEX ROUTE
 */
songs_router.get("/songs", function(req, res){
    //TODO
    res.send("songs");
});

//==============================================
//            GROUP SONGS ROUTES
//                 RESTFUL
//==============================================
songs_router.route("/groups/:id/songs")
/*
 SHOW ROUTE
 */
    .get(function(req, res, next){
        var groupID = req.params.id;
        //Getting the list of songs for the current group
        h_dbreq.getSongsForGroupID(groupID).then(function(response){
            res.json(h_resp.getJSONResponse(false, "OK", response))
        })
            .catch(function(response){
                res.json(h_error.handleErrorAndGetResponse(response));
            });
    })
    /*
     ADD ROUTE
     */
    .post(function(req, res, next){
        //Adding a new group for user
    })
    /*
     EDIT ROUTE
     */
    .put(function(req, res, next){
        //altering a group
    })
    /*
     DELETE ROUTE
     */
    .delete(function(req, res, next){
        //deleting a group
    });


module.exports = songs_router;