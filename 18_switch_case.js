// switch case

let day = 6;

switch(day){
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Day");
}


//write the code using if...else condition
let browser = prompt("Enter your favourite browser: ");
if(browser == 'Edge'){
    console.log(`You've got the Edge!`);
}
else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    console.log('Okay we suport those browsers')
}
else{
    console.log('Out of services');
}

//re-write the code using switch case
let yourBrowser = prompt("Enter Browser: ");
switch(yourBrowser){
    case 'Edge':
        console.log(`You've got microsoft Edge browser`);
        break;

    case 'Firefox':
    case 'Google':
    case 'Opera':
    case 'Safari':
        console.log(`We can manage these browser`);
        break;
        
    default:
        console.log(`Out of our service! Thak you..`);
}