//==============================================
//              HELPER ERRORS
// Methods and properties for ERROR Handling
//
// Require : h_res
//
//==============================================
var h_resp = require("./h_resp");

module.exports = {
    //==========================================
    //              PROPERTIES
    //==========================================

    //==========================================
    //              METHODES
    //==========================================
    /*
        handle error
     */
    handleError: function(error){
        // TODO
        return true;
    },
    /*
        return a json response container for error
     */
    handleErrorAndGetResponse: function(error){
        //Handling the error
        this.handleError(error);
        //building the response
        return h_resp.getJSONResponse(true, error.message, null);
    }
};