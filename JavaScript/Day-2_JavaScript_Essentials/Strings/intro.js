let firstName = "Yatharth";
let lastName = " Saxena";
let fullName = firstName.concat(lastName); // Concatenate the string
firstName = firstName.concat(lastName); //But Existing String can be extended By Concatenation of String
console.log(fullName);
console.log(firstName);
firstName[0] = 'E'; // No ERROR When We Try to change a String in JavaScript
console.log(firstName); // <- Indicate String are Immutable
// Index out of Bound in String does not generate Error
// They only Generate Undefined in Index Out of Bound in String In JavaScript
console.log(firstName[45]); 
console.log(firstName[-6]);
