// JUGGLINE ASYNC Part 2 Official
// Exercise 09 of 13

var http = require('http');
var results = [];
var count = 0;


function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {

  http.get(process.argv[2 + index], function (response) {
    var info = '';

    response.setEncoding('utf8');
    response.on("data", function(data){
       info += data.toString();
    });

    response.on("error", function(error){
      if(error){
        console.log('error message: ' + error.message);
      }
    });

    response.on("end", function(end){
      results[index] = info;

      count++
      if (count == 3 ){
        printResults();
      }


    });
  })
}


for (var x = 0; x < 3; x++){
  httpGet(x);
}
