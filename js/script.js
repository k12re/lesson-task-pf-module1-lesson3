//Question 1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber <= secondNumber) console.log("The first number is smaller than the second");

//Question 2
var age = 11;
var minimumAge = 13;

if (age <= minimumAge) {
  console.log("Minimum age not passed");
} else {
  console.log("Minimum age passed");
}

//Question 3
var income = "11.050";
var maximumIncome = "13.075";

if (income <= maximumIncome) {
  console.log("Maximum income not exceeded");
} else {
  console.log("Maximum income exceeded");
}

//Question 4
var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
}

//Question 5
var invoicePaid = false;

if (invoicePaid === false) {
  console.log("Not paid");
}

//Question 6
var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== winningNumber) {
  console.log("You lose again");
}

//Question 7
var dayOfTheWeek = 2;
var weekDay;

switch (dayOfTheWeek) {
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  case 7:
    weekDay = "Sunday";
    break;
  default:
    weekDay = "Invalid day number";
}
console.log(weekDay);
