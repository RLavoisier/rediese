var h_res = require("./h_res");
//==============================================
//              HELPER ERRORS
// Methods and propertie for ERROR Handling
//
// Require : h_res
//
//==============================================

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
        return h_res.getJSONResponse(true, error.message, null);
    }
};