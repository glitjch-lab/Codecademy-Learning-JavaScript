//This is today's forecast in Kelvin units.
const kelvin = 0;
//Convert kelvin into celsius by subtracting 273.
const celsius = kelvin - 273;
//Converting celsius into fahrenheit with the equation below. Use Math.floor to round down to nearest integer.
let fahrenheit = Math.floor(celsius * (9/5) + 32);
//Broadcasted message about today's forecast.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
const newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton.`);
