//trim()
//toUpperCase()
//toLowerCase()
//slice()

let firstName = "    Nishat    ";
console.log(firstName);
console.log(firstName.length);

firstName = firstName.trim();  //using trim method

console.log(firstName.length);
console.log(firstName);

console.log(firstName.toUpperCase()); //using toUpperCase method
console.log(firstName.toLowerCase()); //using toLowerCase method

let universityName = "Estern";
universityName = universityName.slice(0,5); //using slice method
console.log(universityName);

let collageName = "Milestone"
collageName = collageName.slice(0,5); //using slice method
console.log(collageName);



//Practics
let schoolName = "   Milestone School   ";
console.log(schoolName);
schoolName = schoolName.trim();
console.log(schoolName);
console.log("Total index: " + schoolName.length);
console.log(typeof(schoolName));
console.log(schoolName.length-1);

schoolName = schoolName.slice(0,4);
console.log(schoolName);