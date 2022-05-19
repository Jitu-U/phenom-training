/*
Objects

-Objects has collection of properties which are key value pairs
- A properties value can be a function , which is kown as methods

Properties: 
- Properties are same as variables, except that attachment to objects
- You can access properties using dot notation
- Both obj and properties are case sensitive
- Unassigned properties of an object are undefined



*/

//Creating Objects 

let obj1 = {
    name: "Eddy",
    num: 83899477,
    isHuman: true,
    "human lifespan": 45,
    child: [                            //Nested Object Array
        {
            name: "Thomas",
            isHuman: true
        },
        {
            name: "Thomas",
            isHuman: true
        }
    ]
}

console.log(obj1);

//using constructor function

function Ninja(name,clan,chakraType){
    this.name = name;
    this.clan = clan;
    this.chakraType = chakraType;
}

let Naruto = new Ninja('Uzumaki Naruto','Uzumaki','Wind');

///Accessing the value of properties of Object
console.log(Naruto.clan);


/// Using the Object.create method

//create new obj using obj1

let newObj = Object.create(obj1);

console.log(newObj['human lifespan']);
console.log(newObj.child[1].name); //Chain dot and bracket notation to access property of inner object in array of peoprery of parent Obj

//This keyword connects to currently accesed object

Naruto.team = 7;
Naruto.teamMembers = ["kakashi","Sasuke","Sakura"];
Naruto.logTeam = function(){
    console.log(`Team ${this.team}\nLeader: ${this.teamMembers[0]}\n${this.name}\n${this.teamMembers[1]}\n${this.teamMembers[2]}`);
}

//Logs the values associated withoject it is called with
//If we xreate a new object and call this function using that Obj, It will retuen different value
Naruto.logTeam();


