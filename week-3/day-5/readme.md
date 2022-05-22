## Working with Validations																								
###	Basic Validations														

Basic form validations can be done using JS. There is example of Validation in `form.html` file.
It can be done at clientside only, to avoid sending unuseful data to server and make it process and fail the reqiest. It makes the server efficient to do basic validation at clientside only. 

Basic Form Validation includes, Checking that if all the neccesory fields are filled and not empty before submitting the form and send data to server side. 


### 	Advanced Validations

Advanced validation includes Validating the data entered in forms, such as validation of username requirements, checking formats of email or phone number etc.

Appropriate functions shoudl be written in order to efficiently validate the form data.

###	Real time examples		c

Check form.html

### Understanding Garbage Collection and Best coding practices.	

In Memory Life Cycle, It is main concern of when to release allocated memory. 
We need to be concerned about the unused memory resourses, JS is high level language so it has it's automated memory management called Garbage Collection(GC). in Low level languages, It is done manually to manage resources and make program efficient.

#### Garbage Collection Algorithms 
#### 1. Reference-counting garbage collection: 
    It is most basic system. Instead of checking usefulness of object or variable, It checks if any other object or Function has it's reference in order to remove the object or memory.

    This has issue when using circular reference, Objects refering to each other. It causes memory leaks.

#### 2. Mark-and-sweep-algorithm:
    It checks reachability of the Object from the Root object. JS has one of the root or global object in it. It periodically checks on the root, and cheking on the child objects. and so on. And finds out the ovjects that are unreachable or not referenced at all.
    This removes the issue of circular reference. Because it checks from root object, If it is unreachable it gets removed.


Only Limitation in JS GC is that, You cannot manually manage Garbage Collection.

for better Working with JS : 

### Best Javascript Practices

- Avoid Global Varibales
- Always declare local variables
- Do declaration at top of every pieace of code to make it cleaner
- Always initialise variable with a value to avoid undefined outputs
- Declare Objects with Const: Variables can be reassigned easily, So you can accidentally reassign the valur to Object to a string Value and it will cause further errors.
- Declare Array with const
- Dont use newObject(); declare value instead;
- Beware of Automatic Type Conversions: A variable can contain any data type. and reassigning variable can change data type.
- use `===` comparison, for absolute comparison of all dta types. using `==` will convert data type and then match.
- Use parameter defaults. add default values for the passed params to the function because if you miss passing the value white callling a function. They will be assigned undefined value and it can break the code.
- Always end your `switch()` with `default` case
- Avoid Number, String, and Boolean as Objects

 `let x = "John";  `           
`let y = new String("John");`

`(x === y)` // is false because x is a string and y is an object.

- Always follow the naming conventions for cleaner code, Better distinguishing between a constructor function and a normal function.
