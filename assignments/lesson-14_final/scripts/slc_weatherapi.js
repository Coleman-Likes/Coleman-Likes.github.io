let slcweatherRequest = new XMLHttpRequest();
let SLCstring = 'https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=994243530e58e3e6625c83f042464c65';
slcweatherRequest.open('Get', SLCstring, true);
slcweatherRequest.send();

slcweatherRequest.onload = function () {
    let weatherData = JSON.parse(slcweatherRequest.responseText);

    document.getElementById('slc-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('slc-high').innerHTML = weatherData.main.temp_max;
    document.getElementById('slc-hum').innerHTML = weatherData.main.humidity;
    document.getElementById('slc-wind').innerHTML = weatherData.wind.speed;

}