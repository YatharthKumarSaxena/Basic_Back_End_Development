// Array :- Ordered Collection of Objects , just like as that in Python

// 1. Array Declaration by Initialization
arr = [1,23,6,"Hello",NaN];
console.log(arr);
console.log(typeof arr); // Array is a Type of Object

// 2. Array Declaration by Constructor
let arr1 = new Array(); // Empty Array
console.log(arr1);
console.log(typeof arr1);

// Arrays are Mutable, we can modify the array
arr[0] = 45;
console.log(arr);

console.log(arr[-4]); // Index Out of bound are printed as Undefined in JavaScript

// Note:- Negative Indexing is not followed in JavaScript