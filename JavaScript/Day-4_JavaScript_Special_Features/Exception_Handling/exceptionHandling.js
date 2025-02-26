// Way to Handle an Exception

try{
    let obj = undefined;
    console.log(obj.name);
}catch(err){
    console.log("Exception is given below:- ");
    console.log(err);
    console.log("Exception Handled");
}finally{
    console.log("I am the finally block");
    console.log("I will always execute");
}