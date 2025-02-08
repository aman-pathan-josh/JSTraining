// Question 2
// Take a function that accepts a function as a parameter (also known as callback function).
// function test(callback) {
//   callback();
// }
function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}
// Explore the following cases - what is printed in the console, and what gets returned:

// 1 ->
// test(callbackFunc);
// Output:
// Calling the callback function

//Explanation:
// we are passing callbackFunc as a parameter to test function, so test function will call that function.
// callbackFunc function returns 5 but test function doesn't return anything.

// 2 ->
// test(callbackFunc())
// Output:
// Calling the callback function
// TypeError: callback is not a function

//Explanation:
// It gave this error because we are calling calbackFunk() while calling test. 
// callbackFunc() is first executed, it logs "Calling the callback function" and returns 5.
// this 5 is returned to test function,i.e test(5) will be called.and test is calling callback function, so it gives error as 5 is not a function.

// 3 ->
// test(() => callbackFunc())
// Output:
// Calling the callback function

//Explanation:
// Here we are passing an arrow function which returns callbackFunc to test as a parameter. 

// 4 ->
// What happens when you return callback() from the test function?
// function test(callback) {
//   return callback();
// }
// console.log(test(callbackFunc)); // to print return value of test

// Output:
// Calling the callback function
// 5

// Explanation:
// Here test function returns callback function. 
// So, when callback function is called it prints the log statement and return 5, which is then returned by test function.

// 5 ->
// What happens when you return callback from the test function?
function test(callback) {
  return callback;
}
console.log(test(callbackFunc));
// Output:
// [Function: callbackFunc]

// Explanation:
// when we return callback from test, we are not calling the callback function, so it will just return the function reference.
