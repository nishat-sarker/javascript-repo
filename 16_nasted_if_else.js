//nested if else

let totalAmmount = 40000;
let employeeSalary = 20000;
let otherCost = +prompt("other cost: ");
let totalCost = employeeSalary + otherCost;
let profit = totalAmmount - totalCost;
console.log(profit);

if(totalAmmount >= totalCost){
    if(totalAmmount > totalCost){
        if(profit >= 9500){
            console.log("Buy a smart phone");
        }
        else{
            console.log("Buy a feature phone");
        }
    }
    else{
        console.log("No profit in your business");
    }
}
else{
    console.log("loss business");
}