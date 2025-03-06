// Learning how to use In-Built Module of Node.js

// By Require We fetch the In-Built Module
const f = require('fs');

// --------------------- //
/* Reading from the File */


console.log(typeof f); // Type is Object
const content = f.readFileSync("input.txt"); // Read File Synchronously
/* Read in the Sync Manner */
console.log("First Line");
console.log('Content is '+content);
console.log("Last Line");

/* Read in Asynchronous Manner */
console.log("First Line");
f.readFile('input.txt',(err,content) => {
    if(err){
        return console.log(err); // Returns the Error
    }
    else{
        // console.log(content); // content here printed as in Byte format so we need to typecast into String
        console.log('Content is '+content); // '+' do the typecasting
        // console.log('Content is ', content); // Content here is printed in Byte format as ',' is not used for type casting
    }
})
console.log("Last Line");


// --------------------- //
/* Writing into an External File */

// Writing Syncronously
console.log("Before Write");
f.writeFileSync('output.txt',"Hello , Welcome to the world of programming");
console.log("After Write");

// Writing Asyncronously
console.log("Before Write");
f.writeFileSync('output2.txt',"Hello , Welcome to the world of programming",err=>{
    if(err){
        console.log("Error in Writing the file");
    }
    else{
        console.log("File Written Asyncronously Successfully");
    }
});
console.log("After Write");
