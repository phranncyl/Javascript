
import { printMessage, inchToCm, getBmi, sumValues } from './utility.js';


printMessage('Md Anwarul', 'Kabir'); 

const inch = 25;
const fahrenheit = inchToCm(inch);
console.log(`${inch} inch = ${fahrenheit} cm`); 

const weightKg = 65;
const heightM=1.20;
const bmi = Math.round(getBmi(weightKg,heightM)*100)/100;
console.log(`Your BMI is ${bmi}`); 

const numbers = [1, 5, 7, 9, 11];
const sum = sumValues(numbers);
console.log(`The sum of your numbers is ${sum}`); 
