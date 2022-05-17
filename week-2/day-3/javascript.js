/*

## Scripting Languages and their usage

- scripting languages are used to write instructions for the runtime environment. for example making a responsive webpage make it dynamic
- they're programming languages , but not all programming languages are scripting languages 
- e.g. Javascript, python , PHP
- uses includes, Automating repetaive tasks baseed on pattern
- beginer friendly
- create and manage dynamic content
- backend programming for complex systems

## Getting Started with JS
you can run JavaScript in several ways:

1. Using console tab of web browsers
    - open browser such as chrome, right click and select inspect , go to console and you can run Js scripts there
2. Using Node.js
    - NodeJs is backend runtime environment for JS, You can install it from https://nodejs.org/en/download/
    - create a JS file as it is created here javascript.js 
    - to erun it open terminal and run `node filename.js`
3. By creating web pages
    - All modern web pages has Js for dynamic web page
    - It is used to make actions on same page, and other functions

## History of JS
    - JavaScript was invented by Brendan Eich in 1995
    - 1997- Ecma Script (ES1) launched
    - 2015 - ES6 launched with Major changes

*/

/* 
    ##Variables and constants
    var 
    let 
    const
*/

var a = 1; // Global scope variable, Older ES mode
let x = 0; // ES6 , global or local scope
const b = 4; // Constant value, it cannot be changed in the declared scope or below


/*
    Datatypes
    - String
    - Number
    - BigInt
    - Boolean
    - Undefined
    - Null
    - Symbol
    - Object : key value pair collection of datas
*/

let str = " Hello World";
let num = 20;
let bigNum = 900719925124740999n
let bool = true
let undefined; // default value of variable is undefined 
let nill = null
let symbol = Symbol('hello');
let obj = {
    _id: 002,
    name: "jitesh",
    phone: 999999999,
}


//logging the value of Obj to console.
console.log(obj);

// comparing string and num
let n = 17;
let s = '17';


console.log(n==s); // Will print true because  == automatically converts datatype
console.log(n===s); // will print false becayse === compares absolute data