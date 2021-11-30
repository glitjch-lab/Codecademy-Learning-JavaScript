//My age.
const myAge = 100;

//early years starts at 2.
let earlyYears = 2;
earlyYears *= 10.5;

//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
let laterYears = myAge - 2;

//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;

//Calculate my dog age by adding early and later years!
let myAgeInDogYears = earlyYears + laterYears;

//writing my name in lowercase.
const myName = "TJ".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
