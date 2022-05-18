/*
Working with Arrays
*/

// Declaring an array 
let arr = [1,3,2,"Array"]; //Declaring array with values
let arr2 = []; //declaring an empty array

console.log("Arr : "+arr);
console.log("Arr2 :"+arr2);
//Accessing, Looping over and removing elements

/// Adding elements
arr2.push('Hello','Array');
arr2.push(1,7,1)
console.log("Arr2  after ading elements :  "+arr2);

/// Removing an element
arr2.pop(); // removes the last element
console.log("Arr2  after removing element :  "+arr2);

///Looping over array
////For loop 

for(let i = 0 ; i < arr2.length; i++){ // array.prototype.length() returns the length of array
    console.log(`${arr2[i]}\n`);  // accessing the element at position  i 
}

//// forEach method
arr2.forEach( x => console.log(x)); // loops over all elements in array

// Array Methods
/// array.at(index)

console.log(arr2.at(1));

/// array.concat(arr1,arr2,arr3,...) -> returns concatinated array 
let concatArray = arr.concat(arr2);
console.log(concatArray);

/// array.entries() returns key value pair of arr elements 
let arrEntries = concatArray.entries()

for (let element of arrEntries) {
    console.log(element);
  }

///array.every(function) : checks if all element passes the test in passed function

function test(elem,index,arr){
    return elem>=0;
}

console.log([0,-1,6,0].every(test)); //prints false
console.log([2,,4,,5,5,3,2,3].every(test)); // prints true


/// arr.fill(a, start, end) : fills with the value a in array from start to end index

console.log(arr2.fill(0, 2, arr2.length));
console.log(arr2); //output : ['hello','array', 0,0]


///arr.filter() : returns a filtered array

let filtered = concatArray.filter( x => x< 3)
console.log(filtered);


///arr.find() finds value that satisfies passed needs , otherwise returns undefined

console.log(concatArray.find(x => x<0)); // retuens undefined
console.log(concatArray.find(x => x < 5)) // returns 1

///arr.findIndex() returns the index of value that matches the requirements in the array, if not found returns -1

console.log(concatArray.findIndex(x => x < 5)); // Logs 1
console.log(concatArray.findIndex(x => x<0)); // logs -1

/// arr.flat() makes the multidimensional array flat

[1,3,[4,5, [4,5,6,7]]].flat() // Makes array [1,3,4,5,4,5,6,7]


/// arr.flatMap() is similar to arr.map().flat() returns array with specified condition and flattens it

///Array.from() : creates array from iterable objects
console.log(Array.from("Phenom"));

///arr.includes() : checks if passed value exists in array 
console.log(concatArray.includes("Hello")); //returns true

/// Arr.indexOf() : returns the index of value passed in Arr. returns -1 if element is not there
console.log(concatArray.indexOf(0));// -1

///arr.join() : merges the arr elements into string
console.log(concatArray.join(' '));

///arr.map() : does the opreation on each element and returns a new array
console.log(concatArray.map( x => x+40));

///arr.reduce() : executes a user-supplied "reducer" callback function on each element of the array, in order, 
///passing in the return value from the calculation on the preceding element. The final result of running the 
///reducer across all elements of the array is a single value. 

let A = [1,3,4,5.5, 5,6 ,78 ];
console.log( A.reduce( (prev,curr) => prev+curr)); //This adds up all elements value


///Arr.reverse() : reverses the array, Modifies the array
A.reverse()
console.log(A);


/// arr.shift() : removes the first element
A.shift();
console.log(A);


///arr.slice(start,end) : returns a small portion of array from start to end
console.log(A.slice(0,2));
console.log(A.slice(1,4));

///arr.sort() : sorts an array
/// You can also pass a sorting function to sort()

console.log("Sorted Array: " + A.sort());

///Insert element or replace ar any index in an array 

A.splice(3,0,45,67); //inserts two elements at 3rd position
console.log(A);

A.splice(3,2); //removes 2 elements from pos 3
console.log(A);


/// arr.unsift() : adds element at start

A.unshift(3);
console.log(A);

