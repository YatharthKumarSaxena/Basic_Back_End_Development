const Yatharth = {
    'rollNo': 12,
    'college': 'AMU'
}
console.log(Yatharth);

// Member Access 
console.log(Yatharth.rollNo); // Access Data Member by Dot Method
console.log(Yatharth['college']); // Access Data Member by Square Method

// Adding Data to Object
Yatharth.country = "India"; // By dot method you can add element in Object
console.log(Yatharth);
Yatharth['continent'] = 'Asia'; // By square method you can add element in Object
console.log(Yatharth);

// Deleting an Object keys and Object Itself
delete Yatharth.country; // Delete by Dot Method
console.log(Yatharth);
delete Yatharth['continent']; // Delete by Square Method
console.log(Yatharth);

// Iteration in Object
for(let key in Yatharth){
    console.log(key);
}