//অবজেক্ট | page 137

//Problem 01
const book = {
    name : "Marhaba Js a Maro Thaba",
    writer : "Jhanker Mahabub",
    price : 550
};
for( const key in book){
    const value = book[key];
    console.log(key, value);
};

//Problem 02
const article = {
    title : "Learning JS",
    category : "Programming"
};
console.log(article.hasOwnProperty("author"));

//Problem 03
const laptop = {
    brand : "Dell",
    model : "Inspiron",
    price: 45000
};
for( const key in laptop ){
    const value = laptop[key];
    console.log(key, value);
};

//Problem 04
const phone = {
    brand : "Samsung", 
    model : "Galaxy S21", 
    price : 8500
};
const keys = Object.keys(phone);
for( const key of keys){
    console.log(key, phone[key]);
};

//Problem 05
const bike = {
    brand : "Hero",
    price : 120000,
    model : "Splendor"
};
console.log(Object.values(bike));

//Problem 06
const books = {
    book1 : "Harry Potter",
    book2 : "The Hobbit",
    book3 : "Game of Thrones"
};
for(const key in books){
    const value = books[key];
    console.log(value);
};

//Problem 07
const numbers = {
    a : 10,
    b : 20,
    c : 30,
    d : 40
};
let total = 0;
for(const key in numbers){
    const value = numbers[key];
    total = total + value;     
}
console.log(total);

//Problem 08
const player = {
    name : "Messi",
    team : "Argentina",
    goals : 91
};
console.log(Object.values(player));

//Problem 09
const building = {
    floors : 10,
    address : {
        street : "Main Road",
        city : "Dhaka"
    },
    type : "Commercial"
};

for(const key in building){  
    console.log(key, building[key]);
};