//ডেটা টাইপ। Page 64

//Problem 01
const num1AsString = "20";
const num1AsNumber = parseInt(num1AsString);
const total = num1AsNumber + 10;
console.log(total);

//Problem 02
const piAsFloat = 3.141159;
const piAsInteger = parseInt(piAsFloat);
console.log(piAsInteger);

//Problem 03
const name = "premikBoy";
const nameAsNumber = parseInt(name);
console.log(nameAsNumber); //Output: NaN

//Problem 04
const num1 = 3.456;
const num2 = 2.789;
const numTotal = (num1 + num2).toFixed(2);
console.log(numTotal);

//Problem 05
const myNum1 = "56.78";
const myNum2 = "12.34";
const mySum = parseFloat(myNum1) + parseFloat(myNum2);
console.log(mySum);

//Problem 06
const theNum1 = '10.5678';
const theNum2 = '5.4321';
const theTotal = (parseFloat(theNum1) + parseFloat(theNum2)).toFixed(1);
console.log(theTotal);

//Problem 07
const number1 = '42.45689754';
const roundNumber = parseFloat(number1).toFixed(3);
console.log(roundNumber);