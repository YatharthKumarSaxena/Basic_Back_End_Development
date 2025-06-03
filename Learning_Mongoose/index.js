const mongoose = require("mongoose")

// Logic to Connect Code With Mongo DB Database

mongoose.connect("mongodb://localhost/be_demodb"); // Specifying the Address where to Connect

// Ordering to Connect with MongoDB

const db = mongoose.connection; // Start the Connection with MongoDB

db.on("error",()=>{
    console.log("Error in Accessing with Database\n");
})

db.once("open",()=>{
    console.log("Connected to Mongo DB Successfully\n");
})

