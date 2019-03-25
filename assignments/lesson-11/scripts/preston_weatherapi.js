let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=994243530e58e3e6625c83f042464c65';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('cc-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('cc-high').innerHTML = weatherData.main.temp_max;
    document.getElementById('cc-hum').innerHTML = weatherData.main.humidity;
    document.getElementById('cc-wind').innerHTML = weatherData.wind.speed;

    name(parseInt(weatherData.main.temp),
        parseInt(weatherData.wind.speed));
}