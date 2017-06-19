//==============================================
//              HELPER AJAX
//  Ajax request and returns
// require h_url
//==============================================
h_ajax = {
    //==========================================
    //              PROPERTIES
    //==========================================

    //==========================================
    //              METHODES
    //==========================================
    /*
        Return an ajax request
     */
    getAjaxRequest: function(_url, _method, _data, _success, _error){
        return $.ajax({
            url: _url,
            method: _method,
            data: _data,
            success: _success,
            error: _error
        });
    },
    /*
        Returning the list of groups for current user
     */
    getGroups: function(){
        var self = this;
        return new Promise(function(resolve, reject){
            self.getAjaxRequest(h_url.getUrlApiGroups(), "GET", null, resolve, reject);
        });
    },
    /*
        Returning the list of songs for a group
     */
    getSongsForGroup: function(groupId){
        var self = this;
        return new Promise(function(resolve, reject){
            self.getAjaxRequest(h_url.getUrlApiGroupSongList(groupId), "GET", null, resolve, reject);
        });
    }
};