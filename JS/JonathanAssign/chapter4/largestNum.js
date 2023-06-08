let prompt = require("prompt-sync")();

// function input(message) {
//   parseInt(prompt(message));
// }

function promptForNumberOfSalesPersons() {
  let numberOfEmpolyee = parseInt(prompt("Enter number of salespersons: "))
  findLargestNumber(numberOfEmpolyee);
}

function findLargestNumber(numberOfEmpolyee) {
  let counter = 1;
  let max = 0;
  while (counter <= numberOfEmpolyee) {
    let unitBySalesPersons = parseInt(prompt("Enter unit for Salesperson" + counter + ": "));
    if (unitBySalesPersons > max) max = unitBySalesPersons;
    counter++;
  }
  console.log("The largest unit is: " + max+ " units");
}

promptForNumberOfSalesPersons();
