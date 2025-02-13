// What will be printed to the console?

const testAsyncFunction = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

// Output: 
// Error in catch block Test static reject

// Here testAsyncFunction() is rejecting the promise, so it will be handles by catch block