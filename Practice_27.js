//লুপ | page 119

//Problem 01
for(let i = 20; i <= 50; i++){
    if(i % 7 == 0){
        console.log(i);
    };
};

//Problem 02
for(let i = 40; i <= 80; i++){
    if(i % 5 == 0 && i % 7 == 0){
        console.log(i);
    };
};

//Problem 03
let sum = 0;
for(let i = 1; i <= 40; i++){
    
    if(i % 13 == 0){

        sum = sum + i;
        
    }
    

}
console.log(sum);

//Problem 04
for(let i = 1; i <= 50; i += 4){
    console.log(i);
};

//Problem 05
for(let i = 0; i <= 100; i++){
    if(i % 9 == 0 && i % 6 == 0){
        console.log(i);
    };
};

//Problem 06
let total = 0;
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 4 == 0){
        total = total + i;
    };
};
console.log(total);