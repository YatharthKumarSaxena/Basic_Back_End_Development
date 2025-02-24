// Set Time Out can make you to make JavaScript Asynchronously execute the Statement

// Concept Of Event Loop, CallBack Function , CallBack Queue and WebAPI comes in Asychronous Execution
// CallBack Function is registered with WebAPI and Timer gets Triggered
// Event Loop keep an eye if time is done push the callback function in callback queue 
// Also Event Loop keep an eye whether our Stack is empty or not if yes pop callback queue and put in Call Stack

console.log("I am printing in the First Line");

setTimeout(()=>{
    console.log("I will print in 3 Seconds");
},3000) // Execute this Function After 3 seconds

console.log("I will printed Syncronously");