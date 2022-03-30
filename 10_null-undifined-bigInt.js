//undifined

let firstName;
console.log(firstName);
firstName = "Nisha";
console.log(typeof(firstName), firstName);


//null
console.log(typeof(null)); //bug error
//js e null er typeof "object" ase. eti solve na korar karon hocche, onek frame work er code allready likha ache. eti solve korte gele sob code e error asbe.


//BigInt
let myNumber = BigInt(22);
let mySecondNumber = 21n; //same as previous line, BigInt er sathe opnno kono datatype add kora jay na
let result = myNumber + mySecondNumber;
console.log(result);