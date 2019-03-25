function name(temperature, windspeed) {
    var windchill = 35.74 + 0.6215 * temperature
        + (0.4275 * temperature - 35.75) * Math.pow(windspeed, 0.16);

    document.getElementById('chillout').innerHTML = windchill.toFixed(0);
}
