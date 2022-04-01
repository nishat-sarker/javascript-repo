//if elseif condition

let mathMarks = +prompt("Math: ");
let englishMarks = +prompt("English: ");
let physicsMarks = +prompt("Physics: ");
let chymarks = +prompt("Chemistry: ");
let highermathMarks = +prompt("Higher Math: ");
let bioMarks = +prompt("Biology: ");

let totalMarks = mathMarks + englishMarks + physicsMarks + chymarks + highermathMarks + bioMarks;
let avgMarks = totalMarks / 6;
console.log(avgMarks);

if(avgMarks >= 80 && avgMarks <= 100){
    console.log("You got A+");
}
else if(avgMarks >=70 && avgMarks <= 79){
    console.log("You got A");
}
else if(avgMarks >=60 && avgMarks <= 69){
    console.log("You got A-");
}
else if(avgMarks >= 50 && avgMarks <= 59){
    console.log("You got B");
}
else if(avgMarks >= 40 && avgMarks <= 49){
    console.log("You got C");
}
else if(avgMarks >= 33 && avgMarks <= 39){
    console.log("You got D");
}
else{
    console.log("You are Fail, Wait for next year");
}