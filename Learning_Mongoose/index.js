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
    // init();
    // Logic to Retrieve Data 
    // fetchData();
    // Logic to Delete Data 
    // deleteData();
    // Logic to Update Data
    updateData();
})

async function updateData(){
    // Logic to Update Data
    try{
        // Update Document By Its Object ID // Note:- { new: true }:- option to return updated doc (otherwise you may get older document)
        const st = await StudentModel.findByIdAndUpdate('68403f8b46ffa16e92dd5a03',{$set: {name:"Rupesh"}},{new: true});
        // Update Single Documents By Some Condition
        const student = await StudentModel.findOneAndUpdate({name: "Austin"},{$set :{name: "Yatharth"}},{new: true});
        // Update All Documents By Some Condition
        const list = await StudentModel.updateMany({name: "Austin"},{$set: {cpi:10}},{new: true});
        // updateOne :- Returns only meta data while findOneAndUpdate returns document
        // replaceOne :- Replaces the entire document (except _id) with the new one.
        // In MongoDB, any keyword starting with $ is called a MongoDB operator
        // $set :- It updates a specific field without replacing the entire document.
        
        console.log(student);
        console.log(st);
        console.log(list);
    }catch(err){
        console.log("Error occured while updating the document");
        console.log(err);
    }
}

async function deleteData(){
    // Logic to Delete Data 
    try{
        // Delete Document By Its Object ID
        const student = await StudentModel.findByIdAndDelete("683ef32b6bc78e164d1bf2d4");
        // Delete One Document Only Based on Some Condition
        const student1 = await StudentModel.deleteOne({name: "Yatharth"});
        // Delete Multiple Documents Only Based on Some Condition
        const teachers = await TeacherModel.deleteMany({name: "Arun"});
        console.log(teachers.deletedCount + " users deleted.");
    }
    catch(err){
        console.log("Error Occured while Deleting the Document");
        console.log(err);
    }
}

async function fetchData(){
    // Logic to Retrieve Data By ID
    try{// To fetch Only Single Record // Return null if Record Not Found
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
        name: "Austin",
        age: 21,
        cpi: 9.456
    }
    const Teacher = {
        name: "Arun",
        age: 40,
        email: "arunsaxena3489@gmail.com",
        subject: ["Math","Science"]
    }
    const std_obj = await StudentModel.create(Student);
    console.log(std_obj);
    const tea_obj = await TeacherModel.create(Teacher);
    console.log(tea_obj);
}