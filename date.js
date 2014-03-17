// "2013-07-06 07:42"
//"YYYY-MM-DD hh:mm"

function timeNow(){
  var newDate   = new Date();
  var year      = newDate.getFullYear()
  var month     = ('0'+ (newDate.getUTCMonth()+1)).slice(-2);
  var day       = ('0' + newDate.getUTCDate()).slice(-2);
  var hours     = ('0' + newDate.getHours()).slice(-2);
  var minutes   = ('0' + newDate.getMinutes()).slice(-2);
  var yearMonthDate = [year,month,day].join('-');
  var hoursSeconds = [hours,minutes].join(':');
  console.log(yearMonthDate + ' ' + hoursSeconds);
}






timeNow();
timeNow();
timeNow();