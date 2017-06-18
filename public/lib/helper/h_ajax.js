//==============================================
//              HELPER AJAX
//  Ajax request and returns
//==============================================
h_ajax = {
    //==========================================
    //              PROPERTIES
    //==========================================

    /*
        ROUTES
     */
    r_groups    : "/groups",
    r_group     : "/groups/",
    //==========================================
    //              METHODES
    //==========================================
    /*
        Returning the list of groups for curent user
     */
    getGroups: function(callback){
        var groups;
        $.ajax({
            url: this.r_groups,
            type: "GET",
            success: function (response){
                callback(response);
            }
        });
    },

    getUrlSingleGroup: function(groupId){
        return this.r_group + groupId;
    }

};