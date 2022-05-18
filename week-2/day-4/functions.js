/*
    Working with functions
*/


//Defining function
function func(var1, var2){
    return var1 * var2
}

//Function Expression
const func2 = function(var1, var2){
    return var1 + var2
}

// Arrow functions ES6
const arrow = (a) => {
    console.log(a*a);
}
// Can be shorthandled 
const arrow1 = a => a*a  // returns a*a , This is shorthand for arrow functions

//Calling functions
console.log(func(2,3));
console.log(func2(2,3));

/* Function Scope 
    - Variable defined inside a function cannot be accesed outside function 
    - Redefining a variable inside function will not override the global variable
    but will prioritised local variable instead of Global variable.
    - You can declare and call function anywhere in same document, if they're having global scope
    - If you declare function  inside function they will be accesible inside that function only
*/

let a = 1;

scope();

function scope(){
    let a = 3;              // Here we defining a local variable a, which is not same as global one 
    console.log(a);         //It will print 3 because functions prioritise local variable first
}


/* 
    Nested functions 
    functions inside functions.

    - Inner functions can access variables of outer function but,
    outer function cannot access variables from inner function.
    - We cannot access inner function outside the outer function
*/


function squareAdd(a,b){
    //inner function
    function square(a){
        return a*a;
    }
    return square(a) + square(b);
}

//If you uncomment below line and try to run , It will give error
//square(3)

console.log(squareAdd(2,4));

//Another Example 
function outer(x){
    function inner(y){
        return x*y
    }
    return inner
}

let inner = outer(5); // returns a function which adds 5 to whatever number we pass
// Since Outer function returns inner function and we have 
// Already passed the 5 to outer function it can be accessed from inner function

console.log(inner(5)); // Will print 10

// We can also do this like this 
console.log(outer(5)(5));  // It will also return 10

//Variable is preserved when inner function is returned, because of closure.




/*
    First class Functions
    - First class functions are those which can be treated as variables,
     can be passed to another function and can be retuened from a function.
*/


// Function assigned to a variable
const hello = function(){
    return 'Hello there, '
}


// Here function is passed as an argument
// Also it is returning the function
const varFunc = function(message,name){
    return function(){
        console.log(message() + name);
    }
}

const log = varFunc(hello, 'Phenom'); // The function returned from varFunc is assigned to log variable
log(); // Prints "Hello There, Phenom"

// We can also use double parantheses
varFunc(hello,"General Kenobi")();



/*
 IIFE : Imideatly invoked function expressions  
 Invokes the function as soon as it declared
*/

( var1 => {
    console.log(var1*var1);
})(3);




