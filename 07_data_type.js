//string "Nishat"
//number 1,2,3,4,5
//booleans (false, true)
//undefined
//null
//BigInt
//Symbol

let age = 23;
let firstName = "Nishat";

console.log(typeof(age));

//convert number to string
console.log(typeof("Age:" + age)); //string korar jonno "" add kore dilei hobe
//or
let myAge = 24;
myAge = String(myAge);
console.log(typeof(myAge));

//convert string to nunber
let myString = "32";
//or
let myStr = "43";
myStr = Number(myStr);
console.log(typeof(myStr));

myString = +"32"; // "" er purbe + dilei number e convert hoye jabe
console.log(typeof(myString));