// HTTP CLIENT
// Exercise 07 of 13

var http = require('http');
var url = process.argv[2]
http.get(url, function (response){
  response.setEncoding('utf8')
  response.on("data", function(data){
    console.log(data)
  }),
  response.on("error",function(err){
    console.log(err)
  }),
  response.on("end",function(end){})


  });