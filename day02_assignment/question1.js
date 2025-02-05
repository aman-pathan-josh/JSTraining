// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:

const sleep_for_a_while = (t) =>{
    setTimeout(() => {
        console.log("Completed");
    }, t);
} 

const func = async () => {
console.log("Printing before");
sleep_for_a_while(3000);
console.log("Printing after");
}

func();
