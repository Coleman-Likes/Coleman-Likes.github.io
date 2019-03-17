//Convert variable into an integer
//id span name is temp and speed.
var temperature = parseInt(document.getElementById
    ('cc-temp').innerHTML);
var windspeed = parseInt(document.getElementById
    ('cc-wind').innerHTML);

    /*var temperature = parseInt(document.getElementById
    ('temp').innerHTML);
var windspeed = parseInt(document.getElementById
    ('speed').innerHTML);*/

//Use fullname variable so it does not conflict.
//Windchill calculation using variables
//Use windchill formula. Use javascript math.
windchill = 35.74 + 0.6215 * temperature 
+ (0.4275 * temperature - 35.75) * Math.pow(windspeed, 0.16);

 //Fixed must be a 0.
 document.getElementById('chillout').innerHTML = 
 + windchill.toFixed(0);

 /*old codepen example
document.getElementById('output').innerHTML =
 "The temperature is <strong>" + result.toFixed(1) + "</strong>";
*/
