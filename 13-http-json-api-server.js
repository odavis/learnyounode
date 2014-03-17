// HTTP JSON API SERVER
// Exercise 13 of 13

var http  = require('http');
var url   = require('url');

var server = http.createServer(function(req, res){
  res.writeHead(200,{"Content-Type": "application/json"});

function timeStandard(time){
  return {
    "hour": time.getHours(),
    "minute":time.getMinutes(),
    "second":time.getSeconds()
  }
}

function timeUTC(time){
  return {
    "unixtime": time.getTime()
  }
}

var urlParse = url.parse(req.url,true);
var time = new Date(urlParse.query.iso);

  if(urlParse.pathname == "/api/parsetime"){
    res.end(JSON.stringify(timeStandard(time)));
  }
  else if (url.parse(req.url,true).pathname == "/api/unixtime"){
    res.end(JSON.stringify(timeUTC(time)))
  }
})
server.listen(process.argv[2]);