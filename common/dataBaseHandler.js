'use-strict';

var ImageSearch = require('../models/imageSearch.js');
var SearchHistory = require('../models/searchHistory.js');

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
    
     this.logSearch = function(query) {
        query = query.replace("%20", " ");
        var data = {"term": query, "when": new Date().toISOString()};
        var search = new SearchHistory(data);
        search.save(function(err, data) {
            if (err) console.error(err);
        });
    };
    
    this.getHistory = function(callback) {
        SearchHistory.find({},{"_id": 0, "__v": 0}).exec(function(err, result) {
            if(err) console.error(err);
            callback(result);
        });
    };
}

module.exports = DatabaseHandler;