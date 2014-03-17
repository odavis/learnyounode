var fs = require('fs');
var path = require('path');

var dirname = fs.readdir(process.argv[2], function(err, list){
  var extArray = list.map(path.extname).map(function(el){
    return el.replace(".","")
  });

  var filteredFilenames = [];

  for(var i = 0;i<extArray.length;i++){
    if (extArray[i] == process.argv[3]){
      filteredFilenames.push(list[i]);
    }
  }

  console.log(filteredFilenames.join('\n'));
});
