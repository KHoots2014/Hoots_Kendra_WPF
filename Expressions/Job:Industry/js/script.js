//job related Expressions

var  children = prompt("Hello, How many children do we have that need dippers changed?");
var time = prompt("How long are we going to have them today?");
const timeChange = time / 2;
const dipChange = children * timeChange;
var results = "If we have " + children + " children and we have them for " + time + " hours then we have to change them " + timeChange +" times today. How many dippers would we need? \n\n" + children +