// 2. What makes a method mutating or non mutating in Javascript? 
// Find out whether each of the following methods are mutating or non-mutating.  
// ○ push 
// ○ pop 
// ○ filter 
// ○ find 
// ○ sort 
// ○ map 

let arr = [1,2,3,4,5]

// ○ push
arr.push(6);
console.log(arr); 
//output: [ 1, 2, 3, 4, 5, 6 ]
// Mutating as it adds an element at the end of array and updates the array.

// ○ pop 
arr.pop();
console.log(arr); 
//output: [ 1, 2, 3, 4, 5 ]
// Mutating as it removes the element from end of the array and updates the array.

// ○ filter
arr.filter((num)=>{
    console.log(num*2);
});
console.log(arr);
// output:
// 2
// 4
// 6
// 8
// 10
// [ 1, 2, 3, 4, 5 ]
// Non-Mutating as it only calls callback function for each element

// ○ find 
console.log(arr.find((num)=>{return num > 2}));
//output: 3
// Non-Mutating as it returns only the index at which element is found.

// ○ sort 
arr.sort((a,b)=>{return b-a});
console.log(arr);
//output: [ 5, 4, 3, 2, 1 ]
// Mutating as it sorts array inplace. it updates the original array.

// ○ map 
const new_arr = arr.map((num)=>{
    if(num%2==0) return "even";
    else return "odd"
})
// output: [ 'odd', 'even', 'odd', 'even', 'odd' ]
console.log(new_arr);
console.log(arr); // [ 5, 4, 3, 2, 1 ]

// Non-Mutating as it returned a new array and didn't alter the original one. 

// How can you verify this?
// we can check if the array is updated or not

// What makes a method mutating or non mutating in Javascript? 
// A mutating method in JS updates the original array or object in place. example sort() method.
// while a non-mutating method do not alter the original array or object instead it returns a new updated one.
