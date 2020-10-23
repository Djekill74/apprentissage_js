function controleForm() {
    let name = document.getElementById("name").value;
    const nameIsValid = (nameTested) => {
        let resultName = /[a-z]{2}/.test(nameTested);
        console.log(resultName);
    }

    console.log(nameIsValid(name));
    console.log("votre nom est : "+ name);
    let tel = document.getElementById("phone").value;
    const telIsValid = (telTested) => {
        let resultTel = /^0[0-9]{9}/.test(telTested);
        console.log(resultTel);
    }
    console.log("le resultat detelIsValid est : " + telIsValid(tel));
    if (nameIsValid(name)==true){
        console.log("nom ok");
    } else {
        console.log("merci de renseigner un nom correct")
    }
}
