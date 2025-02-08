// Question 3. 
// Do you think JSON.stringify would work for arrays as well? 

arr = [1,2,3,4,5,6,7]
arr_str = JSON.stringify(arr)
console.log(arr_str); // output: [1,2,3,4,5,6,7]

console.log(typeof arr_str);

// Output: string

// Answer: JSON.stringify() works for arrays as well

// What about nested objects? 
obj1 = {
    1:'a',
    2:'b',
    3:{"A":1,"B":2},
    4:'d'
}
obj1_str = JSON.stringify(obj1)
console.log(obj1_str); // Output: {"1":"a","2":"b","3":{"A":1,"B":2},"4":"d"}

console.log(typeof obj1_str);
// Output: string
// Answer: JSON.stringify() works for nested objects as well

// What happens if we pass numbers, strings, undefined, null to JSON.stringify? 

console.log(typeof JSON.stringify(11)); // Output: string
console.log(typeof JSON.stringify("JOSH")); // Output: string
console.log(typeof JSON.stringify(undefined)); // Output: undefined (doesn't work for undefined)
console.log(typeof JSON.stringify(null)); // Output: string

// what will happen if you'll pass any function inside JSON.stringify?
function temp(){
    let obj = {
        name:'abc',
        roll:3
    }
    return obj;
}
console.log(JSON.stringify(temp));
// Output: undefined
// as functions can't be stringified by JSON. 

console.log(JSON.stringify(temp()));
// Output: {"name":"abc","roll":3}
// temp() returned the obj object and JSON.stringify() converted it to string
