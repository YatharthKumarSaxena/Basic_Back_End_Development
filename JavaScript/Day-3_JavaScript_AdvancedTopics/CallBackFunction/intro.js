function greet(name,callback){
    const greeting = "Hello "+name;
    callback(greeting);
}

function displayGreet(msg){
    console.log(msg);
}

greet("Yatharth",displayGreet);