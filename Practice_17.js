//ইফ-এলস | page 86

//Problem 01
const hasInvited = true;
const hasMoney = 1500;

if(hasInvited){
    console.log("I will go to the party.");

    if(hasMoney > 1000){
        console.log("With a Gift.");
    }else{
        console.log("Without a Gift, sorry.")
    };
}else{
    console.log("Blocked");
};

//Problem 02
const takeTea = true;
const takeBiscit = true;

if(takeTea){
    if(takeBiscit){
        console.log("Take Tea and Biscit.");
    }else{
        console.log("Take Only Tea.");
    }
}else{
    console.log("Watch Star Jonsha.");
};

//Problem 03
const isActive = true;
const isPremium = true;
if(isActive){
    if(isPremium){
        console.log("Watch Premium.");
    }else{
        console.log("Watch free vesion");
    }
}else{
    console.log("Account is not active.")
};

//Problem 04
const hasFood = true;
const isFoodpandaWorking = false;
if(hasFood){
    console.log("Khabar Gorom Korbo.");
}else if(isFoodpandaWorking){
    console.log("Order food on foodpanda.");
}else{
    console.log("Ami aj roja.");
};

//Problem 05
const guest = 200;
const hasGift = true;
if(guest > 100){
    if(hasGift){
        console.log("Lets party all night.");
    }else{
        console.log("I will party with myself.")
    }
}else{
    console.log("I have a very few friends.");
};