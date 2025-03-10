//কোম্পারিজন || page 73

//Problem 01
const myMoney = 50;
const friendsMoney = "50";
console.log(myMoney == friendsMoney); //true
console.log(myMoney === friendsMoney); //false

//Problem 02
console.log("JavaScript" == 'JavaScript');
console.log("JavaScript" === 'JavaScript'); // উভয় ক্ষেত্রেই true আসবে। কারণ ডাবল ইকুয়াল শুধু মান চেক করে। ১ম ক্ষেত্রে মান একই ছিলো তাই আউটপুট true. আর ২য় ক্ষেত্রে মান একই ছিলো এবং ডেটা টাইপও একই ছিলো তাই আউটপুট true।

//Problem 03
console.log(25 == "25"); //output: true beacuse double equal checks only value. it ignores the data type;
console.log(25 === "25"); //output: false because triple equal checks both value and data type. here first 25 is a number type data where as second 25 is a string type date, thats why is returns false.

//Problem 04
console.log("apple" == "apple"); //true
console.log("apple" === "apple"); //true

//Problem 05
console.log("test" == "TEST"); //false both values are different
console.log("test" === "TEST"); //false both values are different

//Problem 06
const variableX = 15;
const variableY = "20";
console.log(variableX != variableY); //true
console.log(variableX !== variableY); //true

//Problem 07
const variableA = hello;
const variableB = "HELLO";
console.log(variableA == variableB); //can't compare with variabeleA
console.log(variableA === variableB);