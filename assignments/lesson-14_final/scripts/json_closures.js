var section = document.querySelector("article");
var requestURL = 'https://coleman-likes.github.io/assignments/lesson-14_final/json/templeclosures.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var templeData = request.response;
    listClosures(templeData);
}

function listClosures(jsonObj) {
    var templename = jsonObj["templeclosures"];

    for (var i = 0; i < templename.length; i++) {
        if (templename[i].name == "Salt Lake City" || templename[i].name == "St. George"
            || templename[i].name == "Los Angeles" || templename[i].name == "Phoenix") {

            var article = document.createElement("article");
            var article2 = document.createElement("section");

            article.setAttribute("class", "templearticle");
            article.setAttribute("id", templename[i].name + "article");

            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');

            myH2.textContent = templename[i].name;
            /*myPara1.textContent = templename[i].motto;*/
            myPara2.textContent = 'closures: ' + templename[i].templeClosures;

            article.appendChild(myH2);
            article.appendChild(myPara1);
            article.appendChild(myPara2);

            if (section != null) {
                section.appendChild(article);
            }

            if (templename[i].name == "Salt Lake City") {
                myPara2.textContent = 'closures:' + templename[i].events;
                article2.appendChild(myPara2);

                if (document.getElementById('newtemple') != null) {
                    document.getElementById('newtemple').appendChild(article2);
                }

                else {
                    section.appendChild(article);
                }
            }
        }
    }
}