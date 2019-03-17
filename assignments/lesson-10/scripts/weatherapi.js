let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=994243530e58e3e6625c83f042464c65';

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
document.getElementById('cc-hum').innerHTML = weatherData.main.humidity;
document.getElementById('cc-wind').innerHTML = weatherData.wind.speed;


/*}*/

//let icon = "http://openweathermap.org/img/w/10d.png"
let icon = "http://openweathermap.org/img/w/"
 + weatherData.weather[0].icon
+ ".png";
let desc = weatherData.weather[0].description;

document.getElementById('cc-img').setAttribute('src', icon);
document.getElementById('cc-img').setAttribute('alt', desc);
}
