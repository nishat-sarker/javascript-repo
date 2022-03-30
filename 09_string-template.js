//template string
let age = 24;
let firstName = "Nishat";

let aboutMe = "My Name is " +firstName+ " and my age is " +age;
console.log(aboutMe);

//other examole
let mySelf = `My name is ${firstName} and my age is ${age}`;
console.log(mySelf);
//other example
let cgpa = 3.43;
let department = "Computer Science And Engineering";
let universityName = "Daffodil International University"
let bioDate = `${aboutMe}. I am Studying in ${department} at ${universityName}. My avarage cgpa ${cgpa}`;
console.log(bioDate);