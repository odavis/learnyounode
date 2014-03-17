// JUGGLINE ASYNC
// Exercise 09 of 13

var http = require('http');
var result = [], count = 0;

//interfucation function
for(var i = 0; i < 3; i++){
  gethttp(i);
}

function printResults(){
  for(var x=0;x<result.length;x++){
    console.log(result[x]);
  };
}

function gethttp(index){
  var urlRequest = '';
  http.get(process.argv[2+index], function(response){
    response.setEncoding('utf8');
    response.on("data", function(data){
      urlRequest += data.toString();
    });
    response.on("error", function(error){
      if(error){
        console.log(error.message)
      }
    });
    response.on("end", function(end){
      count++;
      result[index] = urlRequest;

      if(count == 3){
        printResults();
      }

    });
  })
}



