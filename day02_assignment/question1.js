// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:

const sleep_for_a_while = async (func,t) =>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            func();
            res();
        }, t);
    });
} 

const func = async () => {
    console.log("Printing from func");
}

const foo = async () =>{
    console.log("Printing before");
    await sleep_for_a_while(func,5000);
    console.log("Printing after");
}
foo();
