// Understanding how to use Server Module and External Module

const exp = require('express');
console.log(typeof exp);

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){ // Server will accept the request only if url is /hello
        res.end("Welcome to My Server"); // Response to be Shown on Browser
    }
    else{
        res.end("You are Trying to hit Wrong Server"); // Response to be Shown on Browser
    }
})

// Why CallBack Used Because these things take time

server.listen(8000,()=>{ // Server runs on port number 7001
    console.log("Server is Started");
})