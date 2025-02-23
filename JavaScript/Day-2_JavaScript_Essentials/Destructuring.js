let per = {
    Name: 'Yatharth',
    age: 19,
    college:'AMU'
}

// Variable name must match with Key Name for Destructuring OtherWise Output will be Undefined
const {Name,college,age} = per;
console.log(Name,age,college);

let [a,b,c] = [1,2];
console.log(a,b,c);