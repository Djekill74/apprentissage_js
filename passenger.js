seatsLeft = 10;
passengersStillToBoard = 8;

passengersBoarded = 0;

while (seatsLeft == 0 || passengersStillToBoard == 0) {  // pourquoi si seatleft 
    // et passengersstilltoboard different 0 la boucle ne se lance pas...

    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
    console.log ('siege restant' + ' ' + seatsLeft)

};

console.log('le nobre doit etre 8 :' + ' ' + passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges
