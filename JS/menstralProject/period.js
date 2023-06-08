let prompt = require("prompt-sync")();

//let startDate = prompt("Enter the start date of your period");

let Year = parseInt(prompt("Enter the year: "));
let Month = parseInt(prompt("Enter the month: "));
let Day = parseInt(prompt("Enter the day: "));

function main(recentYear, recentMonth, recentDay) {
  //   while (recentMonth <= 12){
  //     let startDate = new Date(recentYear, recentMonth, recentDay).getDay();
  //     let periodCycle = parseInt(prompt("Enter the cycle of your period: "));
  //     menstralRange(startDate, periodCycle);
  //   }
  let startDate = new Date(recentYear, recentMonth, recentDay).getDay();
  let periodCycle = parseInt(prompt("Enter the cycle of your period: "));
  menstralRange(startDate, periodCycle);
}

function menstralRange(startDate, periodCycle) {
  let nextDayOfPeriod = startDate + periodCycle;
  console.log(nextDayOfPeriod);
  console.log(startDate);
  nextMonth(nextDayOfPeriod);
}

function nextMonth(nextDayOfPeriod) {
  let nextDate = new Date(Year, Month, nextDayOfPeriod);
  console.log(nextDate);
}

main(Year, Month, Day);
