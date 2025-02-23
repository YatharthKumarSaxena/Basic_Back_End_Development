arr = [1,2,3,4,5];

// To push Single or Multiple Element to End of the array
arr.push(6,7,8);
console.log(arr);

// To push Single or Multiple Elements at the Beginning of the Array
arr.unshift(-2,-1,0);
console.log(arr);

// Removing the Elements from the Array
// 1.) Pop Method (By Default remove the Last Element of the Array)
console.log(arr.pop());
console.log(arr);
// 2.) Shift Method (By Default Remove the First Element of the Array)
console.log(arr.shift());
console.log(arr);

// Combine an array into another
arr1 = [10,11,12,13,14];
arr = arr.concat(arr1);
console.log(arr);

// Length of an Array
console.log(arr.length);

// Convert an Array into String (Opposite Method to Split Function in String)
let str = "Yatharth";
str = str.split("");
console.log(str);
// 1st Method is to use Join Operation
console.log(str.join()); // This join ',' too with The Array Elements // Separator is By Default ","
console.log(str.join("@"));
// 2nd Method is to use toString Method
console.log(str.toString()); // Problem is that here you cannot Remove Separator in Joining
str = str.join(""); // To Remove Separator in Join
console.log(str);

// Slicing of the Array (It does not modify your Array)
console.log(arr);
// arr = arr.slice(2,-1); <- This Will Modify Your Array
arr.slice(2,-1); // <- This will not modify your array
console.log(arr);

// Splicing of the Array (This Modifies your Array)
let removedEle = arr.splice(0,2); // Removes the First Two Element 
console.log(removedEle);
console.log(arr); // Note:- First Index indicate from which index you start deletion of element
// Second one Decide how many element you erase from that index to onwards
arr.splice(0,5,100,101); // 100,101 will be added in removed element place
// after removing starting 5 elements of array
console.log(arr)

// Reverse a Given Array
arr.reverse() // Reverse the array
console.log(arr);

// To find Index of the Element of the Array
console.log(arr.indexOf(100)); // If not Found return -1

// To Sort the Array in JS
// arr.sort() Note this does not sort your Array in JS you need to pass the Sorting Logic
arr.sort((a,b) => a-b); // Sort Array in Increasing Order
console.log(arr);
arr.sort((b,a) => a-b); // Sort Array in Decreasing Order
console.log(arr);