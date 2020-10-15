console.log ('hello log');
var year = 2018;

if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) { 
	console.log (year + " est bissextile")
} else {
    console.log (year + " n'est pas bissextile")}



    
var number = 42;
var reste = number % 10;
var dizaine = (number - reste) / 10;

console.log ("dans " + number + " il y a " + dizaine + " dizaine, et " + reste + " unité");




var decompte = 10;
while (decompte > 0) {
	console.log ("reduction a " + (--decompte));
}





var numberA = 4552;
var numberB = 1337;

var biggest = whoIsTheBiggest(numberA, numberB);

function whoIsTheBiggest(a, b) {
    if (a>b) {
        return a;
    }
    else {
        return b
    }
}

console.log (biggest);






const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
    console.log("Embarquement du passager " + passengers[i]);
}




let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
    console.log ('siege restant' + ' ' + seatsLeft)
}

console.log('passager embarqué' + ' ' + passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges





  


  let testInner = document.getElementById('inner');
  testInner.innerHTML = "<span>alors ca marche?</span>"
