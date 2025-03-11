//অ্যারে | page 102

//Problem 01
const fruits = ["আম", "কাঁঠাল", "লিচু"];
if(fruits.includes("আম")){
    console.log("আম আছে");
}else{
    console.log("আম নেই, গাছে উঠ");
};

//Problem 02
const names = ["বাবুল", "আলিফ", "ছোটন"];
const indexOfBabul = names.indexOf("বাবুল");
console.log(indexOfBabul);

//Problem 03
const friends = ["রিমন","রিফাত", "রাজিব"];
console.log(friends.indexOf("রিফাত"));

//Problem 04
const cities = ["Dhaka", "Chittagong", "Sylhet"];
cities.push("rajshahi");
console.log(cities.includes("RajShahi"));

//Problem 05
const arr = ["দীঘি", "মেঘ", "বৃষ্টি", "বর্ষা"];
if(arr.includes("বৃষ্টি")){
    console.log("I need Umberalla");
}else{
    console.log("No rain no Pain");
};

//Problem 06
const games = ["ফুটবল", "ক্রিকেট", "ভ্লিবল"];
console.log(games.includes("ব্যাডমিন্টন"));