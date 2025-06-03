const express = require("express"); // Extracting Module by Require Keyword

console.log(typeof express); // Type of Express is Function

const app = express(); // Using Express Function

// Creating Server from Express 

app.listen(50000,()=>{
    console.log("Server has Started")
});

// Basic Code to See how Express handle Request Response Cycle

app.get("/",(req,res)=>{
    res.send("I am Sending Response for My Server to You");
})