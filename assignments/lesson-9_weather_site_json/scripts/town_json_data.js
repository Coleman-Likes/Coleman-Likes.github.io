
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
}

function newTowns(jsonObj) {
    var towns = jsonObj['towns'];
    //header.appendChild(myH1);

    for (var i = 0; i < towns.length; i++) {

        var article = document.createElement('article');
        var h2 = document.createElement('h2');


        h2.textContent = towns[i].name;


        var myPara1 = document.createElement('p');

        var myPara2 = document.createElement('p');

        var myPara3 = document.createElement('p');

        var myList = document.createElement('ul');


        section.appendChild(myArticle);


        myPara1.textContent = towns[i].motto;
        myPara2.textContent = 'yearfounded: ' + towns[i].yearFounded;
        myPara3.textContent = 'currentpopulation: ' + towns[i].currentPopulation;
        myPara4.textContent = 'averagerainfall:' + towns[i].averageRainfall;;



        document.getElementById('towndataid').appendChild(article);
    }
}
        