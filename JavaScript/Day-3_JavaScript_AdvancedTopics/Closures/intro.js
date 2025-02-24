// Concept Of Closure :- Used to access local variable outside the function using its Inner Function

function outerFun(){
    let outerVar = "I am the outer variable of Outer Function"
    function innerFun(){
        console.log("Inner Function can access outer function variables i.e");
        console.log(outerVar);
    }
    return innerFun;
}

let greet = outerFun();
console.log(typeof greet);
greet();