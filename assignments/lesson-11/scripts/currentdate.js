/*var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
var c = month[d.getMonth()];
document.getElementById("date").innerHTML = n, c;
*/
//getmonth

//add to the same get elementbyid. everything will be added to line 12

//move document.getelementbyid to the bottom.
/*
var d = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").innerHTML = d.toLocaleDateString('en-US', options);
*/
/*
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
document.getElementById("year").innerHTML=n;

//getmonth

//add to the same get elementbyid. everything will be added to line 12

//move document.getelementbyid to the bottom.*/

var d = new Date;
function formatDate(d){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], 
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = days[d.getDay()], 
      month = months[d.getMonth()], 
      date = d.getDate(), 
      year = d.getFullYear();
  return day + ', ' + date + ' ' + month + ' ' + year;
}
document.getElementById('currentDate').innerHTML = formatDate(d);
