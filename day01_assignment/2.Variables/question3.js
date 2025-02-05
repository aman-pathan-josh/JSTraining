// Question 3

// Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object.

let array1 = [2, 3, 4, 6, 5];
const array2 = [8, 7, 6, 5, 4];

array1[2] = 10;
array2[2] = 11;

console.log("changing value of const array1 at index 2,", array1);
console.log("changing value of const array2 at index 2,", array2);

array2.splice(3, 1);
console.log("deleting value of const array2 at index 3,", array2);

// Question : What do you expect to happen in both cases? What actually happens in both cases.
// Answer : in case of both let and const we can update, remove or add elements to the array.
// but, only difference is that we can't reassign the value to const variable.

// e.g.,
// array2 = [1,2,3] <--- this will give error

// What is the difference between an object declared as a let or a const variable?
// object declared as let or const can be modified.
// but we can't reassign value to object declared as const.
