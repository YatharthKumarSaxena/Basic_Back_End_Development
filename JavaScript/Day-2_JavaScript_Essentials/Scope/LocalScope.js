/* Local Scope */

// 1. Function Scope

function greet(){
    var name = "Yatharth";
    console.log("Hello, I am "+name);
}
greet();

// console.log(name); // <- Error in this Line Due to Local Scope Since name Has Function Scope

// 2. Block Scope

{
    let x = 5;  // It has both block and function Scope
    var a = 6;  // Var Has no Block Scope, it has only function scope
    const t = 0;  // It has both block and function Scope
    console.log(x);
    console.log(a);
    console.log(t);
}
console.log(a);
// console.log(t); <- Const has both Scope So Error
// console.log(x); // <- Let has both Scope So Error
