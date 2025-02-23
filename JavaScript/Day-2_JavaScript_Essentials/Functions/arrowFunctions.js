// Concept to Write Less and Get More //

/* Function with no parameters and no return */
var greet = () => console.log("Hello World");
greet()

/* Function with parameters and return */
var sum = (a,b=9) => a+b;
console.log(sum(3));

/* Function with Parameters but no return */
var modulo2 = (a) => console.log("Modulus of "+a+"%2 =",a%2);
modulo2(7);

/* Function with no parameters but return */
var minSmallestPrime = () => 2;
console.log(minSmallestPrime());

/* Function with Multiple Lines, Parameters of Function Body */
var product = (a,b) => {
    console.log ("Product of "+a+" * " +b+" :- ");
    return a*b;
}
console.log(product(5,6));

// var a = () => console.log(arguments); // Argument Object are not in Arrow Functions , they are only in Normal Functions
// a(1,2,3,3,4,5);