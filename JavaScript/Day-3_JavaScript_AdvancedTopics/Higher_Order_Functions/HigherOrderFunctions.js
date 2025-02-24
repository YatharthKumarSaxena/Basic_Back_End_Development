/* Higher Order Functions are the Functions in which return type and parameter type is either void,
 functions,primitive and non primitive datatype */

// Example of Higher Order Function in which Parameter is Function
function operationFn(opFun,a,b){
    return opFun(a,b);
};

function add(a,b){
    return a+b;
}

let sum = operationFn(add,1,2);
console.log(sum);

// Example of Higher Order Function in which return type is Function
function getGreetMethod(){
    return function(){
        console.log("Hello Everyone, Welcome to the World of Programming")
    }
}

func = getGreetMethod();
console.log(typeof func);
func();

// Example of Higher Order Function in which Parameter as well as Return is Function
function specialGreet(a,func){
    return function(){
        a = func(a);
        console.log("Hello",a);
    }
}

function stringToUpperCase(a){
    return a.toUpperCase();
}

specialFn = specialGreet("Yatharth",stringToUpperCase);
console.log(typeof specialFn);
specialFn();