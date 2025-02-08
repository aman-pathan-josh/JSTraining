// Question 5
// Can you use return instead of break in loops? 

// Answer:
// Yes we can use return instead of break, but it depends on our usecase.
// If we want to return some value after the if condition, then we can use return or else 
// we can use break to break from loop and execute further code

// Examples:
// I want to find element 30 in the array

arr = [10,20,30,40,50,60];
const display = ()=>{
    for (let i =0;i<arr.length;i++){
        if (arr[i] == 30){
            return i; // return index as we found the element
        }
    }   
    console.log('after for loop'); // this line will not be executed as we are returning from for loop.
}

const foo = ()=>{
    for (let i =0;i<arr.length;i++){
        if (arr[i] == 30){
            console.log(i); // print index and break as there is no need to search further
            break;
        }
    }   
    console.log('after for loop'); // this line will be excuted after for loop.
}

console.log(display());
foo();