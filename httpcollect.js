var url = process.argv[2];
var http = require('http');
var bl = require('bl')

http.get(url, function(response) {
  var character = '';
  response.setEncoding('utf8');
  response.on('data', function(data) {
     character+=data
  });
  response.on('error', function(err) {
    if(err){
      character+=err
    };
  });

  response.on('end', function(end) {
    console.log(character.length);
    console.log(character);
  });
})

// Official Solution
// http.get(url, function(response) {
//   var character = '';
//   response.setEncoding('utf8');
//   response.pipe(bl(function(err,data){
//     data = data.toString();
//     console.log(data.length);
//     console.log(data)
//   }))

// })