const myAge = 16;
//the first two years = 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;
//first two years are already calculated
let laterYears = myAge - 2;
//each year after is 4 dog years
laterYears *= 4;
//total of all years (full age)
const myAgeInDogYears = earlyYears + laterYears;
//make my name lowercase for practice
const myName = 'Cecelia'.toLowerCase();
//print info
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
