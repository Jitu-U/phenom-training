/*
Working with Async Js

Promise and Promise Chaining
-  Promises represents completion of an async event

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

syntax. 

Promise.then(successHandler. rejectHandler) : calls apropriate function based on promise rejectipn or fulfilment
Promise.catch() : for error handling
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});




/// Promise Chaining, Then statements , every then recieves the value from previous statement
myPromise
    .then(val => "Hello")
    .then(val => val + " World")
    .then((val) => console.log(val))  /// Prints Hello World
    .catch(err => console.log("Error" + err));


/*
Promises can be nested

  const promiseA = new Promise(myExecutorFunc);
  const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
  const promiseC = promiseA.then(handleFulfilled2, handleRejected2);

  here's one example, PromiseB and C are different results fulfilment of Promise A
*/



/*
Async Await

Async functions are declared using async keyword and , Await keyword is used within the function 
It is asynchronous function, and 
it does not proceed to nedt commands until the await value is returned or Promise isn't resolved
*/


/*
setTimeOut(func,time);
it sets a timeout for eunning the function, time is passed in ms
*/

function resolve() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolve();
    console.log(result);
  }
  
  asyncCall(); // Will log calling & Resolbved after 2 seconds 

  // You may have also noticed that, it prints calling before Hello World , because next functiions were running
  // while previous async promise was still in peding state.



  //Example from MDN docs

  function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  }
  
  async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds() // starts timer immediately
    const fast = resolveAfter1Second() // starts timer immediately
  
    // 1. Execution gets here almost instantly
    console.log(await slow) // 2. this runs 2 seconds after 1.
    console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
  }
  

  sequentialStart();
  //concurrentStart(); // Try uncommenting this function to see the difference
  


  //setInterval(code,interval)
  //repeatedly runs code with specified time difference until cleared
  // retyrns an interval ID which then can be used to clearInterval(ID);

  const repeatFunc = () => {
    console.log("Repeat...");
    }

  let ID = setInterval(repeatFunc,2000);

 

  setTimeout(() => clearInterval(ID),10000); // To end the Loop after 10 sec



  /*
  Event Queue, Micro and Macor Task Queue

  - Js works on Even loops
  - The event loop concept is very simple. There’s an endless loop,
   where the JavaScript engine waits for tasks, executes them and then sleeps,
    waiting for more tasks.


    MacroTasks:
    
    When CPU is busy, task Queue is enqueed and that is called MacrotaskQueue because
    it was already busy.
    Now, Task Processing happens First come first serve basis, and that causes some tasks to wait before
    previous queeue empties.
    Like , for example you did a mouseover event and there is script running, So until that script running 
    does not finish CPU won't move to next task.
    And Sometimes these tasks has timeout which causes Page go unresponsive , because CPU doesn't render 
    content while all queue is processing.

    Use cases: 
    - Splitting CPU hungry tasks, useSetTimeout or setINterval to make a delay in tasks
    - Progress Indication:  this is important to create a progressbar to complete a heavy task
    - DOing something after task Completion


    MicroTasks

    - they are mostly Promise or async tasks that are queued 
    -   when a promise is ready, its .then/catch/finally handlers are put into the queue;
        they are not executed yet. When the JavaScript engine becomes free from the current code,
        it takes a task from the queue and executes it.
    - If we’d like to execute a function asynchronously (after the current code), but before changes 
    are rendered or new events handled, we can schedule it with queueMicrotask.
    
  */





