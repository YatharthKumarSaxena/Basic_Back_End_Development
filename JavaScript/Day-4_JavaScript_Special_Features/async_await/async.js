// Concise Way of Writing the Promise
// You cannot return Reject Directly in Async Method you need to throw an Error

async function makingPromise(msg,flag){
    if(!flag){
        throw new Error("Promise is Rejected");
    }
    else return msg;
}

promise1 = makingPromise("Promise1",false);
promise1.then((msg)=>{
    console.log(msg);
    console.log("Promise1 is now made a Success")
}).catch((err)=>{
    console.log(err.message);
    console.log("Promise1 is not made")
});

promise2 = makingPromise("Promise2",true);
promise2.then((msg) => {
    console.log(msg);
    console.log("Promise is made successfully");
}).catch((err) => {
    console.log(err.message);
    console.log("Promise2 is rejected");
})

makingPromise("Promise3",false).then((msg) => {
    console.log(msg);
    console.log("Is Successfully Made");
}).catch((err) => {
    console.log(err.message);
    console.log("Promise is rejected");
}).finally(() => console.log("Async is very cool and fancy way to define Promises"));