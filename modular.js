var module = require('./filtermodule.js');

var dir = process.argv[2]
var ext = process.argv[3]

var filtered = module(dir, ext, function(err, data){
  if(err){
    return console.err(err);
  }

  data.forEach(function(file){
    console.log(file);
  });
});
