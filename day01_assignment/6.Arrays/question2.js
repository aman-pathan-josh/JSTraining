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
// Mutating

// ○ pop 
arr.pop();
console.log(arr);
// Mutating

// ○ filter
arr.filter((num)=>{
    console.log(num*2);
});
console.log(arr);
// Non-Mutating

// ○ find 
console.log(arr.find((num)=>{return num > 2}));
// Non-Mutating

// ○ sort 
arr.sort((a,b)=>{return b-a});
console.log(arr);
// Mutating

// ○ map 
const new_arr = arr.map((num)=>{
    if(num%2==0) return "even";
    else return "odd"
})
console.log(new_arr);
// Non-Mutating

// How can you verify this?
// we can check if the array is updated or not