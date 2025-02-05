// Use the typeof operator to find the types of different variables. 
// Specially note what t typeof operator returns for arrays, null values and NaN. 

// type of different datatypes

console.log("Type of Integer 10:", typeof(10));
console.log("Type of text 'abc':", typeof("abc"));
console.log("Type of array [1,2,3,4]:", typeof([1,2,3,4]));
console.log("Type of hash {1:'a,2:'b'}:", typeof({1:'a',2:'b'}));
console.log("Type of null:", typeof(null));
console.log("Type of NaN:", typeof(NaN));


// How can you find if a variable  an array or NaN besides typeof? 

// To find if variable is array or not we can user isArray() method
arr = [1,2,34,5,6]
console.log(Array.isArray(arr));

// To find if variable is NaN or not we can user isNaN() method
console.log(isNaN(5));
console.log(isNaN(NaN));
console.log(isNaN(arr));