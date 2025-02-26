// Example of Action which is executed only if all Promises are Successfull 

const f1Promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.6){
            resolve("I am in for Goa");
        }else{
            reject("My cat is ill");
        }
    },2000);
})
const f2Promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.83){
            resolve("I am in for Goa");
        }else{
            reject("My Father has planned another trip");
        }
    },3000);
})
const f3Promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        if(Math.random() > 0.06){
            resolve("I am in for Goa");
        }else{
            reject("I am busy in some other important work");
        }
    },1000);
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
    console.log(msg);
    console.log("We are going to Goa");
}).catch((msg)=>{
    console.log(msg);
    console.log("We are not going to Goa");
})