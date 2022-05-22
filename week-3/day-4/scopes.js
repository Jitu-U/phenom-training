// Scopes 

var global = "I am Global Var";
let glob = "I am general var";

function func(){
    let loc = "I am restricted Var";
    let global = "I am Local";
    console.log(global);   // Even though we have decalared global var outside the func, It will 
    //Prioritise the variable declared inside and it will print, I am local
    console.log(glob+loc); // Prints both the glob and loc value
}

console.log(global); 
// Even though we redecalared the variable inside func() , It will still print(I am Global)
// This is global scope, This variable can be acessed inside a function but the same variable decalared inside a 
// function cannotb be accessed outside the function.

console.log(glob);
/// Uncomment below code to see the local variable scope
///console.log(loc);/// This will giev you error