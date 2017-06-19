//==============================================
//              HELPER URL
//  URLs for pages and APIs
//==============================================
h_url = {
    //==========================================
    //              PROPERTIES
    //==========================================
    /*
        ROUTES
     */
    r_api           : "/api",
    r_groups        : "/groups",
    r_group         : "/groups/",
    r_songs         : "/songs",

    //==========================================
    //              METHODES
    //==========================================
    /*
     Returning the url for a single group id page
     */
    getUrlSingleGroup: function(groupId){
        return this.r_group + groupId;
    },
    /*
     Returning url for a groups list from API
     */
    getUrlApiGroups: function(){
        return this.r_api + this.r_groups;
    },

    /*
     Returning url for group songs list from API
     */
    getUrlApiGroupSongList: function(groupId){
        return this.r_group + groupId + this.r_songs;
    }
};