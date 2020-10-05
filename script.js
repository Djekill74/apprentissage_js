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