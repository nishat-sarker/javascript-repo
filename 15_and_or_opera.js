// and , Or Operator

//and( && )
let clubName = "Dhaka Boat Club";
let age = 20;
if(clubName[1] === "h" && age >= 18){
    console.log(`You may go ${clubName}`);
}
else{
    console.log(`You can't go there`);
}

//or( || )
if(clubName[3] === "a" || age >=18){
    console.log(`You may go ${clubName}`);
}
else{
    console.log(`You can't go there`);
}