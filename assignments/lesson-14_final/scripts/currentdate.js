var d = new Date;
function formatDate(d) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var day = days[d.getDay()],
    month = months[d.getMonth()],
    date = d.getDate(),
    year = d.getFullYear();
  return day + ', ' + date + ' ' + month + ' ' + year;
}
document.getElementById('currentDate').innerHTML = formatDate(d);
