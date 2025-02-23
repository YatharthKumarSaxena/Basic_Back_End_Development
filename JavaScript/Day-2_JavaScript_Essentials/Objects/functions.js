const obj = {
    'name':"Yatharth",
    language: 'JavaScript',
    'rollNo': 12
};

// To get all the Keys of an Object
console.log(Object.keys(obj));

// To get all the Objects of an Object
console.log(Object.values(obj));

// To get both Keys and Value
console.log(Object.entries(obj));

// Cloning an Object using Assign
const newPerson = Object.assign({},obj);
// How to Assign new feature in cloned object 
const person = Object.assign({},newPerson,{role: 'Developer'});
console.log(person);