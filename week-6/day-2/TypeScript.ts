

// Decalring interface types
interface User{
    name: string;
    id: number;
    contact?: number;  //"?" here means optional Property
}


//Deaclaring an object with type

const user : User = {
    name: 'John',
    id: 1
}
// See here we have't added contact property and
//still it is an object and not giving any errors
// But below commented Object will give an error
// Check by uncommenting 

/*
 const user2: User = {
     name: 'John',
     contact: 997789889,
 }
*/


// Types with class

class Person{
    name: string;
    id: number

    constructor(name: string, id: number){
        this.id = id;
        this.name = name;  
    }

}

let newPerson: User = new Person("James", 2);

function getAdmin(user : User): User{
    return user
}

console.log(getAdmin(newPerson));