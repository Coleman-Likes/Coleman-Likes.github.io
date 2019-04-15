var section = document.querySelector("article");
var requestURL = '../';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    newTowns(townData);
}

function newTowns(jsonObj) {
    var idahotowns = jsonObj["towns"];

    for (var i = 0; i < idahotowns.length; i++) {
        if (idahotowns[i].name == "Preston" || idahotowns[i].name == "Soda Springs"
            || idahotowns[i].name == "Fish Haven") {

            var article = document.createElement("article");
            var article2 = document.createElement("section");

            article.setAttribute("class", "idahoarticle");
            article.setAttribute("id", idahotowns[i].name + "article");

            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');

            myH2.textContent = idahotowns[i].name;
            myPara1.textContent = idahotowns[i].motto;
            myPara2.textContent = 'yearfounded: ' + idahotowns[i].yearFounded;
            myPara3.textContent = 'currentpopulation: ' + idahotowns[i].currentPopulation;
            myPara4.textContent = 'averagerainfall:' + idahotowns[i].averageRainfall;

            article.appendChild(myH2);
            article.appendChild(myPara1);
            article.appendChild(myPara2);
            article.appendChild(myPara3);
            article.appendChild(myPara4);

            if (section != null) {
                section.appendChild(article);
            }

            if (idahotowns[i].name == "Preston") {
                myPara5.textContent = 'Events:' + idahotowns[i].events;
                article2.appendChild(myPara5);

                if (document.getElementById('newtown') != null) {
                    document.getElementById('newtown').appendChild(article2);
                }

                else {
                    section.appendChild(article);
                }
            }
        }
    }
}