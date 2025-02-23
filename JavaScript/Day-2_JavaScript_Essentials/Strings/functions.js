let Name = "Yatharth";

// To find Length
console.log(Name.length);

// To Convert Each Letter Of String in Either Upper Case or Lower Case
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

Name = Name.toUpperCase();
console.log(Name) // <- String In JS can be changed to both LowerCase and UpperCase

// To find Character at a given Index i i.e s[i] , there is an alternative way to do
console.log(Name.charAt(-3)); // Index Out of Bound lead here to print a Blank Line

// Slicing (Very Simlar To Python)
console.log(Name.slice(4));
console.log(Name.slice(1,4));
console.log(Name.slice(-8));
console.log(Name.slice(-4));
Name = Name.slice(0,4);
console.log(Name); // String can be changed by Slicing as Well

// Index Of 
console.log(Name.indexOf('Y'));
console.log(Name.indexOf('a')); // If No Character Or String Exist in the String index of Return -1

// Trim
let sample = " Hello Yatharth ";
// And Can be used to change String
sample = sample.trim(); // Remove Extra WhiteSpace from Left And Right Side of the String 
console.log(sample);

// Split (Used To make Array)
sample = sample.split("");
console.log(sample); // A String can be converted directly into Array By Split Function

