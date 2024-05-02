//  arrays
const myArray = [];

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

console.log(myArray);

// length property
console.log(myArray.length);

// last element
console.log(myArray[myArray.length - 1]);

// append elements to an array
myArray.push("school");
console.log(myArray);

// remove the last element
const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

// prepend elements to an array
const newLength = myArray.unshift("bar");
console.log(myArray);
console.log(newLength);

// remove the first element
const firstItem = myArray.shift();
console.log(myArray);
console.log(firstItem);

// "delete" an element
// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

// delete an element
myArray.splice(1, 1);
console.log(myArray);

// modify elements
myArray.push(true);
console.log(myArray);
myArray.splice(1, 2, "foo");
console.log(myArray);

// insert an element
myArray.splice(1, 0, "bar");
console.log(myArray);

// restart
const myArray2 = ["A", "B", "C", "D", "E", "F"];
const newArray = myArray2.slice(2);
console.log(myArray2);
console.log(newArray);

// reverse
myArray2.reverse();
console.log(myArray2);

// join elements
const newString = myArray2.join();
console.log(newString);

// go back to an array
const returnArray = newString.split(",");
console.log(returnArray);

// extend arrays
const newArray3 = myArray.concat(myArray2);
console.log(newArray3);

// concatenate by spreading
const newArray4 = [...myArray, ...myArray2];
console.log(newArray4);
