console.log(i); // ✅ undefined — var is hoisted with value undefined
var i = 67;

console.log(a); // ❌ ReferenceError — 'a' not defined yet
a = 7; // ✅ This will create a global variable ONLY IF line 5 didn't throw error

// console.log(t); // ❌ ReferenceError — const is hoisted but lives in TDZ (Temporary Dead Zone)
const t = 9;