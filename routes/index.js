'use-strict'

var ImageDataParser = require('../common/ImageDataFunctions.js');
var DatabaseHandler = require('../common/dataBaseHandler.js');
var BingSearch = require('bing-search');

var DataParser = new ImageDataParser();
var Database = new DatabaseHandler();


module.exports = function (app) {
    
      app.route("/api/imagesearch/:search").get(function(req, response, next) {
        var serchTerm  = req.params.search.replace(" ", "%20");
        var offset = req.query.offset || 10;
        var bingSearch = new BingSearch(process.env.API_KEY);
        Database.findQuery(serchTerm,function(databaseResult) {
            if (databaseResult.length != 0) {
                response.json(databaseResult[0].results.slice(0, offset));
            }
            else {
            
            bingSearch.search({
            query: serchTerm,
           
            } ).then(function(res){
                var formattedArray = DataParser.buildApiArray(res.results);
                //console.log(formattedArray)
                Database.insertQuery(serchTerm, formattedArray);
                response.json(formattedArray.slice(0, offset));
                    }, function(err){ 
                        response.sendStatus(404);
                        console.error(err);
                        
                    });
                }
                
            });
    });
    
    
    app.route("*").get(function(req, res, next) {
        res.sendStatus(404);
    })


}
