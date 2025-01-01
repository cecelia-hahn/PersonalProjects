//this variable stores the forecast for today
const kelvin = 0;
//celsius is 273 less then kelvin
const celsius = kelvin-273;
//equation for celsius to fahrenheit
let fahrenheit = celsius *(9/5)+32;
//rounds decimal answer for fahrenheit down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//convert celsius to newtons
let newton = celsius * (33/100);
//round down
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees in Newtons.`);
