fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(resJson => console.log(resJson));
//----------------------------

let launcherCondition = document.getElementById("launchCondition");
launcherCondition.addEventListener("click", launchResultCondition);
function launchResultCondition() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let resultZoneMeteo = document.getElementById("zoneMeteo");
            resultZoneMeteo.innerHTML = response.current_condition.condition;
        }
    };
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
    request.send();
}

let launcherPrecis = document.getElementById("launchPrecis");
launcherPrecis.addEventListener ("click", launchResultPrecis);
function launchResultPrecis() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let resultZonePrecis = document.getElementById("zonePrecis");
            resultZonePrecis.innerHTML = "date " + response.current_condition.date +
             " temp " + response.current_condition.tmp + 
             " humidité "+ response.current_condition.humidity;
        }
    };
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
    request.send();
 
}