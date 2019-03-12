
//JSON retrieve information from URL.
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    //populateHeader(townData);
    newTowns(townData);
    //console.log(townData);
}

function newTowns(jsonObj) {
    var idahotowns = jsonObj['towns'];
//console.log(idahotowns);
    for (var i = 0; i < idahotowns.length; i++) {
        var article = document.createElement('article');
        var h2 = document.createElement('h2');
        h2.textContent = idahotowns[i].name;

        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        //section.appendChild(article);
        //section id ="towndataid"
        //document.getElementById('towndataid').appendChild(article);

        myPara1.textContent = idahotowns[i].motto;
        myPara2.textContent = 'yearfounded: ' + idahotowns[i].yearFounded;
        myPara3.textContent = 'currentpopulation: ' + idahotowns[i].currentPopulation;
        myPara4.textContent = 'averagerainfall:' + idahotowns[i].averageRainfall;
        article.appendChild(myPara1);
        article.appendChild(myPara2);
        article.appendChild(myPara3);
        article.appendChild(myPara4);

        document.getElementById('towndataid').appendChild(article);
    }
}
        