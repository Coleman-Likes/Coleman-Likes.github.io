let stgweatherRequest = new XMLHttpRequest();
let STGstring = 'https://api.openweathermap.org/data/2.5/weather?id=5131135&units=imperial&APPID=994243530e58e3e6625c83f042464c65';
stgweatherRequest.open('Get', STGstring, true);
stgweatherRequest.send();

stgweatherRequest.onload = function () {
    let weatherData = JSON.parse(stgweatherRequest.responseText);

    document.getElementById('stg-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('stg-high').innerHTML = weatherData.main.temp_max;
    document.getElementById('stg-hum').innerHTML = weatherData.main.humidity;
    document.getElementById('stg-wind').innerHTML = weatherData.wind.speed;

    name(parseInt(weatherData.main.temp),
        parseInt(weatherData.wind.speed));
}