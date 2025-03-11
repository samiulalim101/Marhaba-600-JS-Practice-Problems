//ইফ-এলস | page 83 to 84

//Problem 01
const price = 6500;
if(price > 6000){
    const discount = (price / 100) * 15;
    const pay = price - discount;
    console.log(pay);
}else if(price > 3000){
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);
}else{
    console.log("No discount.")
};

//Problem 02
const customerAge = 68;
let customerPrice = 500;
if(customerAge < 12){
    customerPrice = 0;
    console.log(customerPrice);
}else if(customerAge > 60){
    const discount = (customerPrice / 100) * 50;
    customerPrice = customerPrice - discount;
    console.log(customerPrice);
}else{
    console.log("No discount.");
};

//Problem 03
const accountBalance = 4000;
if(accountBalance < 1000){
    console.log("Deposite kor.");
}else if(accountBalance >= 1000 && accountBalance <= 5000){
    console.log("Bindas Life Enjoy Kor");
}else{
    console.log("Tou dhoni, amakay biya kor.");
};

//Problem 04
const marks = 85;
if(marks < 50){
    console.log("Fail.");
}else if(marks > 50 && marks < 80){
    console.log("Pass.");
}else{
    console.log("A+");
};

//Problem 05
const page = 450;
if(page < 100){
    console.log("Small book.");
}else if(page > 100 && page < 500){
    console.log("Mid-size book");
}else{
    console.log("heart-attack size book");
};

//Problem 06
const temperature = 25;
if(temperature < 0){
    console.log("Ice");
}else if(temperature < 0 && temperature > 20){
    console.log("Cool Cool");
}else{
    console.log("Hot Hot.");
};

//Problem 07
const level = 15;
if(level < 10){
    console.log("novice");
}else if(level > 10 && level < 50){
    console.log("Expert");
}else{
    console.log("Pro Gammer");
};