var fs = require('fs');

var dirname = fs.readdir(process.argv[2], function(err, list){
  console.log(list)
});
