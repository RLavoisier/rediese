//==============================================
//              DASHBORD ROUTE
//                 RESTFUL
//==============================================

var express         = require("express"),
    group_router    = express.Router(),
    Group           = require("../models/m_group");
    h_res           = require("../lib/helper/h_res");
    h_error         = require("../lib/helper/h_error");


/*
    INDEX ROUTE
 */
group_router.get("/groups", function(req, res, next){
    //Fetching groups attached to currently auth user
    //request is fetching the groups where the current member id is in
    //the "members" collection of the records
    Group.find({
            members : {"$elemMatch": { id: req.user._id }}
        }
        , function(err, groups){
            //building the response
            var response = {};
            if(err){
                response = h_error.handleErrorAndGetResponse(err);
            }else{
                response = h_res.getJSONResponse(false, "OK", groups);
            }
            res.json(response);
        }
    );
});

group_router.route("/groups/:id")
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

module.exports = group_router;