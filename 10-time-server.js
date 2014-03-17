// HTTP TIME SERVER
// Exercise 10 of 13

// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

//     "2013-07-06 07:42"

var timePrint = '';

function timeNow(){
  var newDate   = new Date();
  var year      = newDate.getFullYear()
  var month     = ('0'+ (newDate.getUTCMonth()+1)).slice(-2);
  var day       = ('0' + newDate.getUTCDate()).slice(-2);
  var hours     = ('0' + newDate.getHours()).slice(-2);
  var minutes   = ('0' + newDate.getMinutes()).slice(-2);
  var yearMonthDate = [year,month,day].join('-');
  var hoursSeconds = [hours,minutes].join(':');

  return timePrint += (yearMonthDate + ' ' + hoursSeconds);
}



var net = require('net')
var server = net.createServer(function (socket) {
  socket.end(timeNow());
})

server.listen(process.argv[2]);