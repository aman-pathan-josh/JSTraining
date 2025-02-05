// Question 4. What happens if you pass a regular/invalid JSON string to JSON.parse? 
// What will happen if such an invalid function runs in the program? 
// Will other parts of the code execute correctly after that? 

obj1 = {1:"A",2:"B",3:"C",4:"D"}
obj1_str = JSON.stringify(obj1);
// output: { '1': 'A', '2': 'B', '3': 'C', '4': 'D' }

console.log(JSON.parse(obj1_str));

obj2 = "{1:'a',2:'b',3:}"
console.log(JSON.parse(obj2));
// invalid JSON string gives error: SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)

// What will happen if such an invalid function runs in the program? 
// Will other parts of the code execute correctly after that? 

// Answer: Invalid json string gives error while parsing, so the part of code after that line won't be executed