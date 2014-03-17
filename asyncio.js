
var fs = require('fs');
var filename = fs.readFile(process.argv[2], function(err,data){
  if (err) throw err;
  
  var content = data.toString();
  var lines = content.split('\n');
  console.log(lines.length-1);
});
