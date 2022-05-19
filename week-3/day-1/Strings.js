/*
 Working WIth Strings

*/

let str = "Hello There!"
let stre = "General Kenobi"

console.log(`${str}\n\n${stre}`)

//String Methods

///Iterator : it will log each char 

for (let x of str) {
    console.log(x)
}


///str.charAt(i) : returns character at index i 
console.log(str.charAt(4)); //logs o
console.log(str.charAt(43)); // logs empty since char doesnt exist


///str.charCodeAt(i) : returns UTF-16 code of char at index i 
console.log(str.charCodeAt(4)); //logs "111" (o)
console.log(str.charCodeAt(43)); // logs NaN, since char doesnt exist


///str.codePointAt(i) : returns positive int unicode value of char presnet at index 
console.log('😍'.codePointAt(1)); // it covers all chars, includig emojis
console.log('😍'.codePointAt(1).toString(16));  // returns the string value of emoji


///str.concat(st1,st2,st3...) : similar to array, It concatinates string in order to str srray
let concatStr = str.concat("\n", stre);
console.log("\nConcatenated Str: \n" + concatStr);


///str.endsWith(chars) : checks if string ends with specific chars passed
console.log("\n" + str.endsWith("There!")); //  logs true


///String.fromCharCode(int,int2,int3...) : returns a string with the passed UTF16 codes
console.log("\n" + String.fromCharCode(65, 66, 67)); //logs ABC


///str.includes(str2) : checks if str2 substring of the str

let msg = "Hello There! I am Jitesh, Nice to see y'all here. What are you been upto ?";

console.log(`\nHe ${msg.includes(str) ? "said it. he said " : "did not used"} ${str}`)


///str.indexOf(x) : returns the index of 1t matched passed x, same as Array
console.log("\n" + str.indexOf("H")); //logs 0
console.log("\n" + str.indexOf("J")); // Logs -1
/// str.lastIndexOf : returns the 1st found index from last , or simply last found element's index
console.log("\n" + str.lastIndexOf("e")); //logs 10


/// str.match(regex) : matches the regex, and returns array of strs matching , returns NULL if no match found 
let regex = /[A-Z]/g;
console.log(concatStr.match(regex));

///str.matchAll(regex) : returns allthe possible matches 
let regeX = /T(h)(e)(re?)/g;
console.log("\n", concatStr.match(regeX));
console.log("\n", [...concatStr.matchAll(regeX)]); // returns all group matches


///str.padEnd() : extends the string to reach the specified pad length, Similaryly 
/// there is str.padStart() does the same function but in beginning of strng.
let pad = '123456';
console.log("\n" + pad.padEnd(10, '.'))


///str.raw() : returns raw str from template literals
let temp = String.raw`Hi\u000A!`;
console.log("\n" + temp);

///str.repeat(n) : repeats string n times, and retuens a new str
console.log("\n" + (str + "\n").repeat(20))


///str.replace() finds and replaces the regex value with new one , original array remains unchanged 
let rep = 'Twas the night before Xmas...';
let newstr = rep.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...

////Switching wordds
let re = /(\w+)\s(\w+)/;
let switchin = 'Naruto Uzumaki';
console.log(switchin.replace(re, '$2 $1'));  // Uzumaki Naruto


///str.replaceAll() : same as replace but matches all the grouped regex values
/// Note: You need to use global regex values
console.log("\n" + 'aabbcc'.replaceAll(/b/g, '.'));

///str.search() : does similar function as str.match() but returns only 1st index of resulting str, and it is faster

///str.slice(start,end) same as Array
console.log("\n" + str.slice(1, 4));


///str.split() splits with passed value and makes array, it can be one space ' ', '': letter by letter, etc
console.log("\n" + str.split(''));

///str.startsWith() : checks if str starts with passed substr
console.log("\n" + str.startsWith('Hell'));



///str.substring(start,end)
///str.substr(start,numOfChars)
/// It is clear, subStr uses number of chars after start index and 
/// substring uses end inedex,Both returns a substr

console.log("\n" + str.substr(4, 5));
console.log(str.substring(4, 5));


///str.toLocaleLowerCase() : creates lowercase str with locale lower case maping

console.log("\n" +"Hello WhatIsHappening".toLocaleLowerCase('en-US'));


///str.toLocaleUpperCase() : creates lowercase str with locale upper case maping

console.log("\n" +"Hello WhatIsHappening".toLocaleUpperCase('en-US'));


//str.toLowerCase() str.toUpperCase() returns lower cased and upper cased value of str
console.log("\n" +"Hello WhatIsHappening".toLowerCase());
console.log("\n" +"Hello WhatIsHappening".toUpperCase());


///