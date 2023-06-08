let prompt = require("prompt-sync")();

function gasMilage() {
  let totalMilesUsed = milesDriven();
  let totalUsedGas = gasUsed();
  let totalMilesPerGas = totalMilesUsed / totalUsedGas;
  console.log(totalMilesPerGas);
}

function milesDriven() {
  let totalMiles = 0;
  counter = 0;
  let mileCovered = parseInt(prompt("Enter number of miles"));
  while (mileCovered != -1) {
    totalMiles = totalMiles + mileCovered;
    counter++;
    mileCovered = parseInt(prompt("Enter number of miles"));
  }
  return totalMiles;
}

function gasUsed() {
  let UsedGas = 0;
  counter = 0;
  let gasUsage = parseInt(prompt("Enter number of gas used"));
  while (gasUsage != -1) {
    UsedGas = UsedGas + gasUsage;
    counter++;
    gasUsage = parseInt(prompt("Enter number of gas used"));
  }
  return UsedGas;
}

gasMilage();
