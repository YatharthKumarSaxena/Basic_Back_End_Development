// Example of Action which is executed if any of the Promise is Successfull 

const gf1Promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(Math.random()>0.7){
            resolve("GF1: I am coming for Valentine Dinner");
        }else{
            reject("GF1: I am on Diet");
        }
    },3000)
});

const gf2Promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(Math.random()>0.65){
            resolve("GF2: I am coming for Valentine Dinner")
        }else{
            reject("GF2: Phone Unreachable");
        }
    },4000)
});

const gf3Promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(Math.random()>0.75){
            resolve("GF3: I am coming for Valentine Dinner")
        }else{
            reject("GF3: My friends are coming to my Home");
        }
    },5000)
})

Promise.any([gf1Promise,gf2Promise,gf3Promise]).then((msg)=>{
    console.log(msg);
    console.log("I am going for Valentine dinner");
}).catch((msg) => {
    console.log(msg);
    console.log("Lets make another Girl Friend, Where is Tinder App !!");
});