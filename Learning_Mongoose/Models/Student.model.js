// Extract Mongoose Module

const mongoose = require("mongoose");

// Defining Structure/Schema of the Document
const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    cpi: Number
})

// Creating Collection as Student (Note:- By Default Node.js internally convert the Name into Plural Noun Form)
// So Actual Name will be Students not Student
module.exports = mongoose.model("Student",studentSchema); // First Argument Indicate Name of Collection