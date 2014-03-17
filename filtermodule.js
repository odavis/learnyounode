var fs = require('fs');
var path = require('path');

module.exports = function(dirName, ext, callback) {
  var filenames = [];
  fs.readdir(dirName, function(err, data){
    if(err){
      return callback(err);
    }

    data.forEach(function(file){
      if( path.extname(file) == ("."+ext) ){
       filenames.push(file);
      }
    });
    callback(null, filenames);
  });

};
