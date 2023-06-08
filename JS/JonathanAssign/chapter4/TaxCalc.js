let prompt = require("prompt-sync")();

let amountLimitForFifteenPercent = 30000;
let taxRateForIncomeLessThan30000 = 0.15;
let taxRateWhenInExcessOf30000 = 0.2;
let taxToBePaid;

function EnterNumberOfTaxPayers() {
  let numberOfTaxPayers = parseInt(prompt("Enter number of Tax payers: "));
  let counter = 0;
  while (counter < numberOfTaxPayers) {
    let incomeOfTaxPayer = parseInt(
      prompt("Enter income earned of Tax payers: ")
    );
    calculateTheRequiredTax(incomeOfTaxPayer);
    counter++;
  }
}

function calculateTheRequiredTax(incomeOfTaxPayer) {
  if (incomeOfTaxPayer <= amountLimitForFifteenPercent) {
    taxToBePaid = incomeOfTaxPayer * taxRateForIncomeLessThan30000;
  } else {
    taxToBePaid =
      (amountLimitForFifteenPercent * taxRateForIncomeLessThan30000) +
      (incomeOfTaxPayer - amountLimitForFifteenPercent) * taxRateWhenInExcessOf30000;
  }
  console.log(taxToBePaid);
}

EnterNumberOfTaxPayers();