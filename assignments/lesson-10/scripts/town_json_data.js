var section = document.querySelector("article");
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
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
        article.setAttribute("class", "idahoarticle"); /*Each article has the same class*/
        article.setAttribute("id", idahotowns[i].name + "article");

       //can be '' or "".
        var myH2 = document.createElement('h2'); 
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p'); //events data

        myH2.textContent = idahotowns[i].name; //set h2 tag name to idahotowns
        myPara1.textContent = idahotowns[i].motto;
        myPara2.textContent = 'yearfounded: ' + idahotowns[i].yearFounded;
        myPara3.textContent = 'currentpopulation: ' + idahotowns[i].currentPopulation;
        myPara4.textContent = 'averagerainfall:' + idahotowns[i].averageRainfall;
        //myImage.src ="images/town.jpg";
        myPara5.textContent = 'Events:' + idahotowns[i].events; 
        //for future events data

        article.appendChild(myH2);
        article.appendChild(myPara1);
        article.appendChild(myPara2);
        article.appendChild(myPara3);
        article.appendChild(myPara4);
        section.appendChild(article);
        article.appendChild(myPara5); //events data


       // document.getElementById('towndataid').appendChild(article);
    }
  }
    }