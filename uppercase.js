var http  = require('http');
var map   = require('through2-map');

var server = http.createServer(function(req,res){
  var upperCase ='';
  if(req.method != 'POST' ){
    return res.end('send POST request')
  }

  req.on("data", function(chunk){
    upperCase += chunk.toString().toUpperCase();;
  });

  req.on('end', function(){
    res.end(upperCase);
  });


  // using through2
  // req.pipe(map(function(chunk){
  //   return chunk.toString().toUpperCase();
  // })).pipe(res);
});

server.listen(process.argv[2]);


