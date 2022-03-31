// ternary operator OR conditional operator

let age = 15;
let drink;
if(age>=18){
    drink = "coffee";
}
else{
    drink = "Juise";
}
console.log(drink)



//Important Example(main practics)

let myAge = 18;
let play = myAge >=18 ? "football" : "Cricket";
console.log("You can play " + play);

//Another example
let totalAmmount = 432;
let applePrice = 219;
let orangePrice = 190;
let totalCost = applePrice + orangePrice;
totalAmmount = totalAmmount - totalCost;
let goingPurpus = totalAmmount >= 10 ? "Hire a rickshaw" : "Going to home by walk";
console.log(goingPurpus);