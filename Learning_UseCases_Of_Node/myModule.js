
let prod = (a,b) =>{
    return a*b;
}
let div = (a,b) =>{
    return a/b;
}
// By this i can use this function in another file
// module.exports = add;
// This overrides our add function , this method only exports single function
// module.exports = sub;

// To export all the functions we can make use of object
let obj = {
    prod: prod,
    div: div
}

module.exports = obj;