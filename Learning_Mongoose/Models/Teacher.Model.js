// Extract Mongoose Module

const mongoose = require('mongoose');

// Define Schema for Teacher Document
teacherSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        min: 19,
        max: 45,
        required: true
    },
    email:{
        type: String,
        minLength: 15,
        maxLength: 45,
        required: true,
        lowercase: true
    },
    subject:{
        type: [String],
        required: true
    }
},{versionKey: false,timestamps: true})

module.exports = mongoose.model("Teacher",teacherSchema);