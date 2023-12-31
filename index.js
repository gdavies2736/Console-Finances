var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];
/*Dataset*/

//1. Overview - Dataset - finances. Consists of sets of arrays.
//Each array has an index a month [0] (string) & number [1] (interger).
//These indexes relate to date & profit/losses.

//2. Create heading from ReadMe
//Console log to check

console.log ("Financial Analysis")

//3. Create underline from ReadMe
//Console log to check

console.log ("-------------------------")

//4. Total number of Months
//Calculate the total number of months included in dataset.
//Find out the number of months by finding the length of the array
//Create new variable name for total months
//totalMonths should be equal to the length of the array.
//Add in a space after total months so there is a space in the console.
//console.log ("Total months " + months);

var months = finances.length;
console.log ("Total months " + months);

//5. Net Total Amount of Profit/Losses
//Run a for loop.
//Create sum to add the intergers.
//console log("netTotalProfLoss += finances [i][1];")

let netTotalProfLoss = 0;
for (let i = 0; i < finances.length; i++) {
  netTotalProfLoss += finances [i][1];
}
console.log("Total: $" + netTotalProfLoss);

//6. Average Changes in Profit/Losses over entire period.
//Create variable for total amount of differences from month-month.
//Create variable for the average changes.

var totalAmountOfDifferences = 0;
var averageChanges = 0;

//Track what total changes are from month to month
//Run for loop
//Find the difference between each month by nextMonth - currentMonth
//Add these differences
//Find average by dividing total amount of difference / total number of months
//Round off decimal using math.round
//Console.log("Average Change: " + averageChanges);

for (let i = 0; i < finances.length - 1; i++) {
var currentMonth = finances[i][1]
var nextMonth = finances[i+1][1]
var difference = nextMonth - currentMonth
totalAmountOfDifferences += difference
}
var averageChanges = Math.round((totalAmountOfDifferences /(finances.length - 1)) *100) /100


console.log("Average Change: " + averageChanges);


//7. Greatest increase in profits/losses (date and amount) over the entire period.
//Declare variables
//Run for loop to start at the begining of the array
//To find difference between months take away the previous month from the current month(amount) 
//Use if statement to find greatest increase in profit/loss
//Unable to deduct a previous month from [0] so need to start from the second month (i > 0)
//Run an additional if statement in loop - if difference is greater than the greatestIncrease [1]

//8. Greatest decrease in profit/losses (date and amount) over the entire period.
//Same as greatestIncrease, but current month needs to be < greatestDecrease value

var currentMonth;
var monthAndYear; 
var amount;
var previousAmount = 0;
var total = 0;
var change = 0;
var greatestIncrease = ["" , 0 ]
var greatestDecrease = ["" , 0]
var netChangeSum = 0;

for (let i = 0; i < finances.length; i++) {
  currentMonth = finances[i];
  monthAndYear = currentMonth[0];
  amount = currentMonth[1];
  total += amount;
  if (i > 0) change = amount - previousAmount;
  previousAmount = amount;
  netChangeSum += change; 

  if (change > greatestIncrease[1]){
    greatestIncrease = [monthAndYear,change];
  } 

  if (change < greatestDecrease[1]) {
    greatestDecrease = [monthAndYear,change];
}
}

console.log(("Greatest Increase in Profits/Losses: ") + (greatestIncrease));

console.log(("Greatest Decrease in Profits/Losses: ") + (greatestDecrease));

























