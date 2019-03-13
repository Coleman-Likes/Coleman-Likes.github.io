
//JSON retrieve information from URL.
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    newTowns(townData);
    //console.log(townData);
}

    function newTowns(jsonObj) {
    //console.log (jsonObj);
    var idahotowns = jsonObj['towns'];
    //console.log(idahotowns);
    for (var i = 0; i < idahotowns.length; i++) {
        var article = document.createElement('article');
        article.setAttribute("class", "idahoarticle"); /*Each article has the same class*/
      //article.setAttribute("id", idahotowns[i].name + "article"); each article has a unique id.
        var h2 = document.createElement('h2'); 
        h2.textContent = idahotowns[i].name; //set h2 tag name to idahotowns
        article.appendChild(h2);

        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

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
        