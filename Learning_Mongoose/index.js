const mongoose = require("mongoose")
const StudentModel = require("./Models/Student.model");
const TeacherModel = require("./Models/Teacher.Model");
// Logic to Connect Code With Mongo DB Database

mongoose.connect("mongodb://0.0.0.0/be_demodb"); // Specifying the Address where to Connect

// Ordering to Connect with MongoDB

const db = mongoose.connection; // Start the Connection with MongoDB

db.on("error",()=>{
    console.log("Error in Accessing with Database\n");
})

db.once("open",()=>{
    console.log("Connected to Mongo DB Successfully\n");
    // Logic to Insert Data into Database
    init();
    // Logic to Retrieve Data 
    fetchData();
})

async function fetchData(){
    // Logic to Retrieve Data By ID
    try{// To fetch Only Single Record // Retuen null if Record Not Found
        const student = await StudentModel.findOne({name: "Yatarth"}); 
        // To Fetch all Records but Reurn an Empty List [] if No Record Found
        const teacher = await TeacherModel.find({name: "Arn"}); 
        // Fetch Data based on Multiple Conditions
        const teacher1 = await TeacherModel.where("name").equals("Arun").where("age").lt(90).where("age").gt(20).limit(2);
        console.log(student);
        console.log(teacher);
        console.log(teacher1);
    }
    catch(err){
        console.log("Error happened in Retrieving the Data");
        console.log(err);
    }
    
}

async function init(){ // Function is made Async as We are using await 
    // Logic to Insert Data
    const Student = {
        name: "Yatharth",
        age: 20,
        cpi: 9.007
    }
    const Teacher = {
        name: "Arun",
        age: 40,
        email: "arunsaxena3489@gmail.com",
        subject: ["Math","Science"]
    }
    // const std_obj = await StudentModel.create(Student);
    // console.log(std_obj);
    // const tea_obj = await TeacherModel.create(Teacher);
    // console.log(tea_obj);
}