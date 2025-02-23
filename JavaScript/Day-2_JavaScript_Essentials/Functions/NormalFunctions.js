function greet(){
    console.log("Welcome to the World of Programming");
}

greet();

function sum(a,b=8){
    return a+b;
}

console.log(sum(8));

// Special Power that JavaScript give to their function is the 
// Argument Object that is used to read the Forced Arguments
function arg(){
    console.log(arguments);
}

console.log(1,2,3,4,56,6,7,88);