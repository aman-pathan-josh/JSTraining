// What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }}).catch((err) => {
            console.log('Error caught in testAsyncFunction: ', err);
        });
};

testAsyncFunction().then((res) => {
    console.log('Response in then block: ', res);
    }).catch((err) => console.log('Error in catch block: ', err));

// Output:
// If Math.random() gives number greater than 0.5 then promise will be resolved and output would be 
// Response in then block:  Test Resolve

// If Math.random() gives number less that equal to 0.5 then promise will be rejected and handled by catch bloack.so, output would be 
// Error caught in testAsyncFunction:  Test Reject
// Response in then block:  undefined