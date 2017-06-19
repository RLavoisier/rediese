//==============================================
//            HANDLING REQUESTS TO DB
//
//==============================================
/*
    LOADING MODELS
 */
var Group           = require("../../models/m_group");
var Song           = require("../../models/m_song");

module.exports = {
//==============================================
//              GROUP REQUESTS
//
//==============================================

    /*
         Getting a list of groups for current user
         return a Promise
     */
    getGroupsForUserID: function(userId) {
        return new Promise(function (resolve, reject) {
            Group.find({
                members: {"$elemMatch": {id: userId}}
            }, function (err, groups) {
                if (err) {
                    reject(err);
                } else {
                    resolve(groups);
                }
            });
        });
    },

    getGroupById: function(groupId){
        return new Promise(function(resolve, reject){
            Group.findById(groupId, function(err, group){
                if(err){
                    reject(err);
                }else{
                    resolve(group);
                }
            })
        })
    },

    /*
         Getting a list of groups for current user
         return a Promise
     */
//==============================================
//              SONG REQUESTS
//
//==============================================
    /*
        Get a list of songs for a group ID
        return Promise
     */
    getSongsForGroupID: function(groupId){
        return new Promise(function(resolve, reject){
            Song.find({
                refGroup: groupId
            }, function(err, songs){
                if(err){
                    reject(err);
                }else{
                    resolve(songs)
                }
            });
        });
    }
};