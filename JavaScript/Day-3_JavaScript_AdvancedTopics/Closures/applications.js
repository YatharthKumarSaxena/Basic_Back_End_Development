// Application of Closure is used in the Concept of Encapsulation
// This means When you want to hide the data from the user but display it in indirect manner
// Means User cannot directly access that Data , this ensures sensitive data privacy

function customerCounter(){
    let count = 0;
    return function(){
        count++;
        console.log("New CUSTOMER ID is "+count);
    }
}

counter = customerCounter();
counter();
counter();
counter();

