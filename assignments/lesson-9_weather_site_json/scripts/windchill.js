let x = parseInt(document.getElementById('windchill').innerHTML);
let result = (x + 10) / 2;
/*let result = (x )*/

document.getElementById('output').innerHTML = "The temperature is <strong>" + result.toFixed(1) + "</strong>";

/*The formula to calculate the wind chill factor is 
LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}
 f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 
*/
/*
f=35.74+0.6215
*//*
:t*//*temperature*//*-35.75*/
/*
:s*//*speed*//*^{0.16}+0.4275 *//*use math.pow*/
/*:t
:s^{0.16}*/
/* f/*fahrenheit*/ /*= 35.74 + 0.6215
t − 35.75 s 0.16 + 0.4275 t s 0.16 */