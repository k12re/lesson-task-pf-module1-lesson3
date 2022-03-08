// question 1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

// question 2
var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
    console.log("Minimum age met");
} else {
    console.log("Minimum age not met");
}

// question 3
var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) <= parseFloat(maximumIncome)) {
    console.log("Maximum income requirement met");
} else {
    console.log("Maximum income requirement not met");
}


// question 4
var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
}

// question 5
var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

// or
if (invoicePaid !== true) {
    console.log("Not paid");
}

// or
if (!invoicePaid) {
    console.log("Not paid");
}

// question 6
var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
}

// question 7
var dayOfTheWeek = 2;

var dayName;

switch (dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;

    case 2:
        dayName = "Tuesday";
        break;

    case 3:
        dayName = "Wednesday";
        break;

    case 4:
        dayName = "Thursday";
        break;

    case 5:
        dayName = "Friday";
        break;

    case 6:
        dayName = "Saturday";
        break;

    case 7:
        dayName = "Sunday";
        break;

    default:
        dayName = "Invalid day number";
        break;
}

console.log(dayName);
