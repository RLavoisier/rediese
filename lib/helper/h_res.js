
//==============================================
//              HELPER RESPONSE
// Methods and propertie for the request response
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
         return a json response container
     */
    getJSONResponse: function(error, message, data){
        var response = {
            error: error ? true : false,
            message: message,
            data: data
        };
        return response;
    }
};