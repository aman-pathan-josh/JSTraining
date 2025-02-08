// Question 2. What do you think would happen if you pass an index beyond the range of the string? 
// Or if you pass a negative index? Try it out. 

// str = "thejoshsoftware"

// str_len = str.length
// console.log("length of str",str_len);

// console.log(str[-2]);
// console.log(str[16]);

// Output: (It gives undefined for negative and out of range index)
// 15
// undefined
// undefined

// Explanation:
// when out of bound or negative index is encountered, JS does't throw errors it just returns undefined.
// these errors are not handled in JS, like they are handled in c or c++.

// Alternative methods for assessing string characters:
// Example: 
let str = 'JOSH'

// 1. charAt(index)
// returns character at given index
console.log(str.charAt(2)) //S

// 2. at()
// returns character at given index
console.log(str.at(1)) // O

// 3. slice(start, end) (end is excluded)
// extracts characters from index start to end-1
console.log(str.slice(0,1)) // J

// 4. substring(start, end) (end is excluded)
// extracts characters from index start to end-1
console.log(str.substring(1,3)) // OS

// 5. substr(start, length)
// extracts substring of length given starting from start index
console.log(str.substr(1,3)) // OSH

// Among these methods only slice() and at() support negative indexing.

// indexing starts from the last character in negative indexing, 
// so if we provide negative index in at() then it will return character at that index from right
console.log(str.at(-2)) // S

// and slice() will return a string till that index from right.
console.log(str.slice(-2)) // SH

// if we give -ve index out of bound then at() method will return undefined and slice() will return whole string.
console.log(str.at(-6)) // undefined
console.log(str.slice(-6)) // JOSH
