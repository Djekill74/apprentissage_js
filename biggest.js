var numberA = 4552;
var numberB = 1337;

var biggest = whoIsTheBiggest(numberA, numberB);
let smaller=0;

function whoIsTheBiggest(a, b) {
    if (a>b) {
        return a;
    }
    else {
        return b
    }
}
if (biggest === numberA){
    smaller=numberB;
} else {
    smaller=numberA;
}
console.log (biggest + " est plus grand que " + smaller );