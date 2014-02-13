//Wacky Expresstions - how long it will take to travel to Mars...

var  speed= prompt("Hello, I am Marvin the Martian. I am trying to get to my home planet, Mars. Can you please enter how fast my ship is going?");
var  distance= prompt("How Far away is Mars?");
//Equation needed  t=d/s
const travTime = distance / speed; 
//console. log(travTime);
var results = "If Marvin is taveling at " + speed + "MPH and has to travel " + distance + " miles. \n Then it will take Marvin " + travTime + " hours to get to Mars.";
alert(results);

const mPS = 186000;
const sPY = 31557600;
var mPLY = mPS * sPY;
var disLiYears = distance / mPLY;
const liSpeed = 186282; 
var timeLiSpeed =disLiYears / liSpeed ;

var results2 = " We know that there are " + mPLY + " miles in a light year. So we then " + distance + " / " + mPLY + " = " +  disLiYears + " light years to Mars. \n \n So it would take " + timeLiSpeed + " seconds if we where traveling at light speed(186,282 Miles per Second) to travel " + disLiYears+" light years.";
alert (results2);