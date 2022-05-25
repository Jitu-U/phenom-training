// Lodash 


const _ = require('lodash');

//_.map(object, mapFunc) : retuens the mapped object or array 
const numbers = [2 , 7, 5, 9];
let mapped = _.map(numbers, x => x*5);

console.log(mapped);

//Another application is to access specific object property 
const data = [
    {
      name: 'Patrick',
      age: '25',
    },
    {
      name: 'John',
      age: '24',
    },
    {
      name: 'Teresa',
      age: '26',
    }
  ];
  
  console.log(_.map(data, 'name'));
  // [ 'Patrick', 'John', 'Teresa' ]

  

  //_.find : it has same function as es5 find function, but this you need to pass the object or array 
  
  //_.filter: Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
  // Similar to array and Object filter

  /*
  _.keyBy
Creates an object composed of keys generated from the results of running each element
of collection through the callback function.
  */

const users = [
    {
      name: 'Patrick', age: '25', profile: { experience: 2 }
    },
    {
      name: 'John', age: '24', profile: { experience: 2 }
    },
    {
      name: 'Teresa', age: '26', profile: { experience: 4 }
    }
  ];
  
  const usersByName = _.keyBy(users, 'name');
  
  usersByName['Teresa'];

  //_.get(obj,path,defaultValue) : returns the objects from  the path sent.
  // If the path is undefined, It returns the default value

  const experience = _.get(users[1], 'profile.experience', 0);

  console.log(experience);


  ///_.cloneDeep
 ///This method recursively clones the whole object, so if any property of the 
 ///resultant object changes, it will not change the original object as the 
 ///references will also be new.

 //Function chaining
//_.chain can be used to chain functions together as follows:

const logs = _.chain(users)
 .map('age')
 .mean()
 .value();
// 25
console.log(logs);