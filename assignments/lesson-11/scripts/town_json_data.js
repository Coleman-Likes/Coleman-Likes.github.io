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
      article.setAttribute("class", "idahoarticle");
      article.setAttribute("id", idahotowns[i].name + "article");

      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myImages = document.createElement('img');

      myH2.textContent = idahotowns[i].name;
      myPara1.textContent = idahotowns[i].motto;
      myPara2.textContent = 'yearfounded: ' + idahotowns[i].yearFounded;
      myPara3.textContent = 'currentpopulation: ' + idahotowns[i].currentPopulation;
      myPara4.textContent = 'averagerainfall:' + idahotowns[i].averageRainfall;

      if (idahotowns[i].name == 'Preston') {
        myImages.setAttribute('src', 'images/preston-image.jpg');
        myImages.setAttribute('alt', 'Preston Idaho Town Image');
        myImages.setAttribute('class', 'prestontownimg');
      }
      else if (idahotowns[i].name == 'Soda Springs') {
        myImages.setAttribute('src', 'images/sodasprings-image.jpg');
        myImages.setAttribute('alt', 'Soda Springs Town Image');
        myImages.setAttribute('class', 'sodatownimg');
      }
      else if (idahotowns[i].name == 'Fish Haven') {
        myImages.setAttribute('src', 'images/fishhaven-image.jpg');
        myImages.setAttribute('alt', 'Fish Haven Town Image');
        myImages.setAttribute('class', 'fishtownimg');
      }
      article.appendChild(myH2);
      article.appendChild(myPara1);
      article.appendChild(myPara2);
      article.appendChild(myPara3);
      article.appendChild(myPara4);
      article.appendChild(myImages);
      section.appendChild(article);
    }
  }
}