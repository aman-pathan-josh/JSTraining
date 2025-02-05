// Question 2
// Take a function that accepts a function as a parameter (also known as callback function).
function test(callback) {  
  callback();
}
function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}
// Explore the following cases - 
// what is printed in the console, and what gets returned: 
//   ○ test(callbackFunc)
//   ○ test(callbackFunc())
//   ○ test(() => callbackFunc())
//   ○ What happens when you return callback() from the test function? 
//   ○ What happens when you return callback from the test function?

test(callbackFunc) // Calling the callback function

test(callbackFunc()) // TypeError: callback is not a function 
// <-- here we are getting error because we are calling function inside test, but we should have passed it as a parameter

test(() => callbackFunc()) // Calling the callback function 
// <-- here we didn't get error as we returned callback function inside test as parameter

// ○ What happens when you return callback() from the test function? 
function test(callback) {  
   return callback();
}
// Answer: When we return callback() from test function it works normally. 
// It returns the value returned by callback() function.

// ○ What happens when you return callback from the test function?
function test(callback) {  
  return callback
}
// Answer: When we return callback from test function it doesn't return anything, because we haven't called the callback() function.