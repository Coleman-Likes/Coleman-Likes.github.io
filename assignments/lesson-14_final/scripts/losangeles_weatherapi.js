let losweatherRequest = new XMLHttpRequest();
let LOSstring = 'https://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=994243530e58e3e6625c83f042464c65';
losweatherRequest.open('Get', LOSstring, true);
losweatherRequest.send();

losweatherRequest.onload = function () {
    let weatherData = JSON.parse(losweatherRequest.responseText);

    document.getElementById('los-desc').innerHTML = weatherData.weather[0].description;
    document.getElementById('los-high').innerHTML = weatherData.main.temp_max;
    document.getElementById('los-hum').innerHTML = weatherData.main.humidity;
    document.getElementById('los-wind').innerHTML = weatherData.wind.speed;

    name(parseInt(weatherData.main.temp),
        parseInt(weatherData.wind.speed));
}