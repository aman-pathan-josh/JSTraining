// Question 1
// What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? 
// Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? 
// Can you return from inside an if block? What impact does that have? 

// When we use return inside for/while loop or switch case written inside function, then function execution stops and 
// if we want the code written after loop to be executed, then it won't be executed.
// therefore we use break statement.
// and we can return value from within a loop and from inside an if block

// example

const test = ()=>{
    for (let i = 0;i<3;i++){
        if (i==2){
            return "execution stopped";
        }
    }
    return "execution completed"
}

console.log(test());

// here when value of 'i' becomes 2, execution stops and last line of for loop isn't excuted