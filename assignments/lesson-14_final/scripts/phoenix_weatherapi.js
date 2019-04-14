let phxweatherRequest = new XMLHttpRequest();
let PHXstring = 'https://api.openweathermap.org/data/2.5/weather?id=5131135&units=imperial&APPID=994243530e58e3e6625c83f042464c65';
phxweatherRequest.open('Get', PHXstring, true);
phxweatherRequest.send();

phxweatherRequest.onload = function () {
    let weatherData = JSON.parse(phxweatherRequest.responseText);

    document.getElementById('phx-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('phx-high').innerHTML = weatherData.main.temp_max;
    document.getElementById('phx-hum').innerHTML = weatherData.main.humidity;
    document.getElementById('phx-wind').innerHTML = weatherData.wind.speed;

    name(parseInt(weatherData.main.temp),
        parseInt(weatherData.wind.speed));
}