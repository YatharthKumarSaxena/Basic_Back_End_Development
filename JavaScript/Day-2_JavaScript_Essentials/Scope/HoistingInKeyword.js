// Var KeyWord Has Hoisting feature 
// i.e Once Variable var is initialized JS automatically Hoist i.e declare Var At Top of the Program File

console.log(i); // <- No Error Answer Will be Undefined
var i = 67;

// console.log(a); // <- Error as Let is Not Hoisted
// If We do not Write a keyword before variable by default it is taken as var 
// But in Hoisting it Behaves as Let if var keyword us not explicitly mentioned
a = 7; 

// console.log(t); // Error as Const is also not Hoisted
const t = 9;