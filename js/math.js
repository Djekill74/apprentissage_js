let launcherCalcul = document.getElementById("launcherCalcul");
launcherCalcul.addEventListener("click", launchCalcul);

function launchCalcul() {
    let resultMath;
    let numberOne = Number(document.getElementById("number1").value);    
    let numberTwo = Number(document.getElementById("number2").value);
    resultMath = numberOne + numberTwo;
    let resultatDisplay=document.getElementById("resultat");
    resultatDisplay.innerHTML="resultat : " + resultMath;
}

