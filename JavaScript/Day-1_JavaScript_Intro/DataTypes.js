/* Primitive DataTypes*/

// 1. String
var nam = "Yash";
var title = 'Hello'; // '' can be used to represent String
console.log(typeof(nam))
console.log(typeof(title))

// 2. Number
var age = 81;
var b = 7.8
console.log(typeof(b))

// 3. BigInt
var bigNum = 123n; // Use Suffix 'n' to make number to bigInt
console.log(typeof(bigNum))

// 4. NaN (Not a Number)
console.log(typeof(NaN)) // DataType of NaN itself is a Number according to JavaScript

// 5. Null
console.log(typeof null) // DataType of null is Object according to JavaScript

// 6. Undefined
var hell 
console.log(typeof hell) // Uninitialized Variable type is undefined as Per JS

// 7. Boolean
var flag = true;
console.log(typeof flag)

// 8. Symbol (Other Programming Language do not contain this datatype)
var s1 = Symbol() // Way to declare a Symbol
console.log(s1)


/* Non-Primitive DataType */

// Object
var person = {
    nam : "Yatharth",
    age : 20,
    hobby : "coding"
}

console.log(person)