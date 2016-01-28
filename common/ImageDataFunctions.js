'use-strict';

function DataParser() {
    
    this.buildApiArray = function(arr) {
        
        var tempArr = [];
        for (var i =0; i < arr.length; i++ ) {
                var tempObj = {};
                tempObj.url = arr[i].MediaUrl;
                tempObj.context = arr[i].SourceUrl;
                tempObj.snippet =arr[i].Title;
                tempObj.thumbnail = arr[i].Thumbnail.MediaUrl;
                tempArr.push(tempObj);
                //console.log(tempObj)
            }
        return tempArr;
    };
    
};

module.exports = DataParser;