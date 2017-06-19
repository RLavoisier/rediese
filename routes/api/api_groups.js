//==============================================
//              API GROUPS ROUTES
//                 RESTFUL
//==============================================

var express             = require("express"),
    api_groups_router   = express.Router(),
    h_dbreq             = require("../../lib/helper/h_dbreq"),
    h_resp              = require("../../lib/helper/h_resp"),
    h_error             = require("../../lib/helper/h_error");


/*
    INDEX ROUTE
 */
api_groups_router.get("/api/groups", function(req, res, next){
    //Fetching groups attached to currently auth user
    //request is fetching the groups where the current member id is in
    //the "members" collection of the records
    h_dbreq.getGroupsForUserID(req.user._id)
        .then(function(response) {
            res.json(h_resp.getJSONResponse(false, "OK", response));
        })
        .catch(function(response){
            res.json(h_error.handleErrorAndGetResponse(response));
        });
});

api_groups_router.route("/api/groups/:id")
    /*
        SHOW ROUTE
     */
    .get(function(req, res, next){
        
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

module.exports = api_groups_router;