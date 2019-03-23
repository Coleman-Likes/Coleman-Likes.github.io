//This is the second apistring.
let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=994243530e58e3e6625c83f042464c65';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

/*Loop through the forecast.list entries and 
determine with an selection structure if the dt_txt 
field contains (includes) the string '18:00:00' to get 
your five forecasts. */
forecastRequest.onload = function () {
    let forecastApi = JSON.parse(forecastRequest.responseText);
    let forecast = [];
    let firstDay = 1;
    let iconArray = [];
    let icon = 1;
    let descArray = [];
    let desc = 1;
    console.log(forecastApi); //verify forecast

    //use W10 image data dump as reference.
    //forecast.list loop
    forecastApi.list.forEach(i => {
        if (i.dt_txt.includes('18:00:00')) {
            forecast[firstDay] = i.main.temp;
            firstDay++;
        }
    });

    //Loop 18:00:00 every 24 hours with if statement.
    forecastApi.list.forEach(i => {
        if (i.dt_txt.includes('18:00:00')) {
            iconArray[icon] = "https://openweathermap.org/img/w/" + i.weather[0].icon + ".png";
            icon++;
        }
    });

    forecastApi.list.forEach(i => {
        if (i.dt_txt.includes('18:00:00')) {
            descArray[desc] = i.weather[0].description;
            desc++;
        }
    });
    //Variable for days 1 through 5.
    for (var i = 1; i <= 5; i++) {
        document.getElementById('day' + i).innerHTML = forecast[i].toFixed(0) + "&deg;" + "F";
        document.getElementById('cc-img' + i).setAttribute('src', iconArray[i]);
        document.getElementById('cc-img' + i).setAttribute('alt', descArray[i]);
    }
};