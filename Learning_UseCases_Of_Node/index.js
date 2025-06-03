// ./ make js to search the file in the current directory / folder
// Whenever you create a module .js become optional
const operation = require("./myModule")
const op = require("./myModule2")
console.log(typeof operation);
console.log(operation.prod(3,4));
console.log(operation.div(9,3));
console.log(op.sub(2,3));
