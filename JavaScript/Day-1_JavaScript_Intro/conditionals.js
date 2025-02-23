num = 7;
if(num%2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}

// Ternary Operator
(num%2 !== 0)?console.log("Number is Odd"):console.log("Number is Even");
(num>=0)?((num>=5)?console.log("Number is greater than 5"):console.log("Number is less than 5 but greater than 0")):console.log("Number is less than 0");

// Switch Case Very Similar To C++
var fruit = "Apple";
switch(fruit){
    case "Apple":
        console.log("It is an Apple");
        break;
    case "Mango":
        console.log("It is a mango");
        break;
    default:
        console.log("Data Not Available")
        break;
}