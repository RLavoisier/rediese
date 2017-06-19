//==============================================
//              HELPER DOM
//  HELPER functions for DOM Manipulation
//==============================================
h_dom = {
    //==========================================
    //              PROPERTIES
    //==========================================

    //==========================================
    //              METHODES
    //==========================================
    /*
        Returning the list of groups for curent user
     */
    emptyHtmlContentForElement: function(element){
        $(element).html("");
    },

    /*
        Return the if of the current Group
     */
    getDataGroup: function(){
        return $("#app").attr("data-group");
    }

};