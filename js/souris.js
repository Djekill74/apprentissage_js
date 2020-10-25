// recup de cible
const modifDiv = document.getElementById('cible');
console.log(modifDiv);

//definition de la div cible
modifDiv.style.height = "100px";
modifDiv.style.width = "100px";
modifDiv.style.backgroundColor = "white";

let launcher = document.getElementById("launch");

//lancement de la boite

let widthRandom;
let heightRandom;
let resultDiv = document.getElementById("result");
let bestResultDiv = document.getElementById("bestResult");
launcher.addEventListener("click", launchBox);
function launchBox() {
    //recup de la taille de l'ecran
    let widthWindow = window.innerWidth;
    let heightWindow = window.innerHeight;
    console.log(widthWindow);
    console.log(heightWindow);

    // creation des nombres aleatoire pour le placement de cible
    widthRandom = (widthWindow - 100) * Math.random();
    console.log(widthRandom);
    heightRandom = (heightWindow - 100) * Math.random();
    console.log(heightRandom);

    //placement de cible 
    modifDiv.style.left = widthRandom + 'px';
    modifDiv.style.top = heightRandom + 'px';

    resultDiv.innerHTML = "";
    bestResultDiv.innerHTML = "";
}



let tentative = -1;
let bestTentative;

document.addEventListener("click", detect);
function detect(event) {
    tentative++;
    if (tentative == 0) {
        console.log("bon jeu");
    } else {
        console.log("essaie détecté, vous avez réalisé " + tentative + " essaie(s).");
        let distanceX, distanceY;
        let detectX, detextY;
        detectX = event.pageX;
        if (detectX < widthRandom) {
            distanceX = widthRandom - detectX;
        } else if (detectX > widthRandom && detectX < (widthRandom + 100)) {
            distanceX = 0
        } else {
            distanceX = detectX - widthRandom
        }
        console.warn("distanceX : " + distanceX);
        detectY = event.pageY;
        if (detectY < heightRandom) {
            distanceY = heightRandom - detectY;
        } else if (detectY > heightRandom && detectY < (heightRandom + 100)) {
            distanceY = 0;
        } else {
            distanceY = detectY - heightRandom;
        }
        console.warn("distanceY : " + distanceY);
        let sum;
        sum = distanceX + distanceY;
        console.log(sum);
        if (sum > 1000) {
            console.log("glacé");
        } else if (sum > 600 && sum <= 1000) {
            console.log("froid");
        } else if (sum > 400 && sum <= 600) {
            console.log("tiede");
        } else if (sum > 200 && sum <= 400) {
            console.log("chaud");
        } else if (sum > 0 && sum <= 200) {
            console.log("bouillant");
        } else {
            resultDiv.innerHTML = "victoire en : " + tentative + " coups!!!";
            if (bestTentative == null) {
                bestTentative = tentative;
                bestResultDiv.innerHTML = "vous venez d'effectué votre premier meilleur score !!!";
                tentative = -1;
            } else {
                if (bestTentative > tentative) {
                    bestTentative = tentative;
                    bestResultDiv.innerHTML = "vous venez de battre votre record!!!";
                    tentative = -1;
                } else {
                    bestResultDiv.innerHTML = "vous n'avez pas battue votre precedent record qui etait de : " + bestTentative;
                    tentative = -1;
                }
            }
        }
    }
}
