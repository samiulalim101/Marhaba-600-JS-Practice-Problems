//অবজেক্ট | page 139 to 140

//Problem 01
const headphone = {
    brand : "Sony",
    price : 3000,
    color : "red"
};
Object.freeze(headphone);
headphone.discount = "20%";
console.log(headphone);

//Problem 02
const player = {
    name : "Messi",
    goals : 800,
    club : "Inter Miami"
};
Object.freeze(player);
player.team = "Argentina";
console.log(player);

//Problem 03
const book = {
    title : "Harry Potter",
    author : "JK Rowling",
    pages : 500
};
Object.seal(book);
book.author = "Samiul Alim";
console.log(book);

//Problem 04
const gadget = {
    name : "iPhone",
    price : 120000,
    color : "black"
};
delete gadget.price;
console.log(gadget);

//Problem 05
const animal = {
    name : "Tiger",
    location : "Sundarban"
};
Object.freeze(animal);
animal.location = "Dhaka";
console.log(animal.location);

//Problem 06
const food = {
    name : "Pizza",
    price : 500,
    size : "Large"
};
Object.seal(food);
food.price = 300;
console.log(food);