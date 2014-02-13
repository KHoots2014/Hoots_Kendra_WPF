//Kendra Hoots 2/12/14 Expressions Worksheet

//Problem 1 -Calculating Dog Years
var dogAge = 1;
const dogYears = 7;

//Result Variables
var sparkyAge = dogAge * dogYears;
//Print out the output “Sparky is X human years old which is X in dog years.
console. log("Sparky is " + dogAge + " human years old which is " + sparkyAge + " in dog years.");

//Problem 2 Slice of Pie

// given variables and Constants
var people = 10;
var pizza = 3;
const slicePizza = 8;
// number of slices per person
// Result Variables
var slice = ( pizza * slicePizza ) / people;
//printout "Each person ate X slices of pizza at the party."
console.log("Each person ate " + slice + " slices of pizza at the party.");

// Problem 3 -Slice of pie 2

// Given Variables stay the same as above
//result Variables
people = 10;
pizza = 4;
// x= pizza * slices / people
slice = pizza * slicePizza % people;
//Printout "Sparky got X slices of pizza.
console. log("Sparky got " + slice + " slices of pizza.");

// problem 4 -Average shopping bill

// Given Variables

var grocTotals = [150, 200, 100, 120, 95];

//Result Variable
// total amount
var total = grocTotals [0] + grocTotals[1] + grocTotals[2] + grocTotals[3] + grocTotals[4];
// average amount spent
var average = total / 5;

//Print out
console. log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week");