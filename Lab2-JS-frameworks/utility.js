
//Function that takes two parameter firstName, and lastName, and then print it.
export function printMessage(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName} !
    Today is your lucky day!! Enjoy your time!!!`);
}

//Function that takes one parameter inch and convert it to cm
export function inchToCm(inch) {
    return inch*2.54;
}

//Function that takes two parameters and return one value
export function getBmi(weightInKg,heightInMeter) {
    return weightInKg/(heightInMeter*heightInMeter);
}

//Function that takes a numeric array and return a value after summing those numbers.
export function sumValues(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

