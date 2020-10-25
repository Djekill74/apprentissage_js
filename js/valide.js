function controleForm() {
    let name = document.getElementById("name").value;
    const nameIsValid = (nameTested) => {
        let resultName = /[a-z]{2}/.test(nameTested);
        return resultName;
    }

    let tel = document.getElementById("phone").value;
    const telIsValid = (telTested) => {
        let resultTel = /^0[0-9]{9}/.test(telTested);
        return resultTel;
    }
    if (telIsValid(tel)==true){
        console.log ("tel ok");
    } else {
        console.log("merci de renseigner un tel coorect")
    }
    if (nameIsValid(name)==true){
        console.log("nom ok");
    } else {
        console.log("merci de renseigner un nom correct")
    }
    if (nameIsValid(name)==true && telIsValid(tel)==true){
        console.log("gg on passe a la suite");        
    } else {
        console.log("encore un effort!!!");
    }
}
