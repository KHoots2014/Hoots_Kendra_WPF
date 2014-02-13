//Wacky Expresstions - how long it will take to travel to Mars...

var  speed= prompt("Hello, I am Marvin the Marshin. I am trying to get to my home planet, Mars. Can you please enter how fast my ship is going?");
var  distance= prompt("How Far away is Mars?");
//Equation needed  t=s/d
const lightYear= 5878499810000;
const travTime = speed / distance;
const disLiYears = distance / lightYear; 
//console. log(travTime);
var results = "If Marvin is taveling at " + speed + "MPH and has to travel " + distance + " miles. \n Then it will take Marvin " + travTime + " hours to get to Mars.";
alert(results)
