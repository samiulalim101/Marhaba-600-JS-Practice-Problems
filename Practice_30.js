//অবজেক্ট | page 131

//Problem 01
const player = {
    name : "Mahamudullah",
    age : 42,
    sports : "cricket",
    team : "Bangladesh"
};
console.log(player.team);

//Problem 02
const laptop = {
    brand : "hp",
    price : 200000,
    hardDisc : "intel",
    ram : 2,
    screenSize : 32
};
console.log(laptop.screenSize);

//Problem 03
const favPlace = {
    name : "Cos's Bazar",
    distance : "400km",
    popularity : "high"
};
console.log(favPlace["popularity"]);

//Problem 04
const phone = {
    brand : "Nokia",
    color : "black",
    price : 5000
};
console.log(phone["price"]);

//Problem 05
const library = {
    name : "Public Libray",
    location : "Dhaka",
    books : 5000
};
console.log(library.location);

//Problem 06
const movie = {
    title : "Inception",
    director : "Nolan",
    rating : 9
};
console.log(movie.rating);

//Problem 07
const college = {
    name : "ndc",
    established : 1949,
    grpups : ["Science", "Arts", "Commerce"]
};
console.log(college.grpups[1]);

//Problem 08
const family = {
    father : {
        name : "Rayhan",
        age : 40,
        profession : "Army"
    },
    mother: {
        name : "Salma",
        age : 32,
        profession : "housewife"
    }
};
console.log("Total age is:",family.father.age + family.mother.age);
