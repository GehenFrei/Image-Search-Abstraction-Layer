'use-strict';

var ImageSearch = require('../models/imageSearch.js');

function DatabaseHandler() {
    
    this.findQuery = function(query, callback) {
        ImageSearch.find({"query": query }).exec(function(err, result) {
            if (err) console.error(err);
            
            callback(result);
        });
    };
    
    this.insertQuery = function(query, results) {
    
        
        var data = {"query": query, "results": results, "time": new Date().getTime()};
        var imageSearch = new ImageSearch(data);
        imageSearch.save(function(err , data) {
            if (err) console.error(err);
        });
    };
}

module.exports = DatabaseHandler;