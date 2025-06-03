/* Promises Concept */

// In JS , promise is an inbuilt object provided by the JS

// In Promise Object , Argument Passed must be an Arrow Function
// This Arrow Function consists of the functional arguments i.e resolve and reject
const simranPromise = new Promise((resolve,reject) => {
    let parentDecision = true;
    if(parentDecision){
        resolve("Yes, I am ready for Marriage");
    }else{
        reject("Sorry, My parent are not accepting this Relationship");
    }
});

// Action of the Promise
// If Promise is Completed/Incompleted
simranPromise.then((msg)=>{
    console.log("Simran Message: "+msg);
    console.log("Let's book the Wedding Venue");
}).catch((msg)=>{
    console.log("Simran Message: "+msg);
    console.log("Don't Worry, Be Happy, I respect your decision");
})
// If Response is positive then 'then' is executed
// Note:- Catch will execute only if Response is negative

// Finally use in Promise
// If you want to execute always in Promise irrespective of Resolve/Reject
const nicePromise = new Promise((resolve,reject) => {
    var parentDecision = false;
    if(parentDecision){
        resolve("This is the result of lessons that My Parents taught to me",parentDecision);
    }else{
        reject("My parents always wants my good, if I am wrong they give right path",parentDecision);
    }
})

// Action on Promise
nicePromise.then((msg,parentDecision) => {
    console.log("My Parent Decision is",parentDecision);
    console.log(msg);
    console.log("My parents are always satisfied with my Decisions")
}).catch((msg,parentDecision) => {
    console.log("My Parent Decision is",parentDecision);
    console.log(msg);
}).finally(() => {
    console.log("I am always with my Parent Decisions whatever decision my parent have");
})