async function AwaitingFunction(){
    try{
        let data = new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(Math.random()>0.5){
                    resolve("Hello, I am accepted");
                }else{
                    reject("Hello I am Rejected");
                }
            },4000)
        })
        let result = await data;
        console.log(result);
        return "I am Promise";
    }catch(err){
        console.log(err);
        return "Promise is Rejected";
    }
}

w = AwaitingFunction().then((msg)=>console.log(msg)).catch((err)=>console.log(err)); // w is promise here
console.log(w);