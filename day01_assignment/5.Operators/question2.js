// Question 2. What do you think would happen if you pass an index beyond the range of the string? 
// Or if you pass a negative index? Try it out. 

str = "thejoshsoftware"

str_len = str.length
console.log("length of str",str_len);

console.log(str[-2]);
console.log(str[16]);

// Output: (It gives undefined for negative and out of range index)
// 15
// undefined
// undefined