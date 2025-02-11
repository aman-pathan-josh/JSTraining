// ● Share a minimum four differentiation between regular function and arrow
// functions with one examples

// Differences between regular and arrow function
// 1) Duplicate Parameters -

// Regular Function: Duplicate named parameters are allowed in regular functions.
function foo1(a,b,a) {
  console.log(a,b);
  
}
foo1("first","second","third");
// Output:
// third second

// Explanation:
// Here argument a's value gets updated to new value as we are passing a twice i.e. foo1(a,b,a)

// Arrow Function: Duplicate named parameters are not allowed. parameter names must be unique.
// const test1 = (a,b,a) => {
//     console.log(a,b);
// };
// test1("first","second","third");
// Output:
// SyntaxError: Duplicate parameter name not allowed in this context

// 2) Accessing arguments -

// Regular Function: we can access arguments passed to function using arguments object
function foo2() {
  return arguments;
}
console.log(foo2(1, 2, 3));
// Output:
// [Arguments] { '0': 1, '1': 2, '2': 3 }

// Arrow Function: we can acces arguments passed to arrow function using rest parameters
const test2 = (...arg) => {
  return arg;
};
console.log(test2(1, 2, 3));
// Output:
// [ 1, 2, 3 ]

// 3) using new keyword to use function as a constructor

// Regular Function: we can use new keyword with regular functions and can create new objects.
function foo3(name, age) {
  this.name = name;
  this.age = age;
}
let foo_obj = new foo3("ABC", 20);
console.log(foo_obj.name);
console.log(foo_obj.age);

// Output:
// ABC
// 20

// Arrow Function: we can't use new keyword with arrow function.
// const test3 = (name, age) => {
//   this.name = name;
//   this.age = age;
// };
// let test_obj = new test3("XYZ",22);
// console.log(test_obj.name);
// console.log(test_obj.age);
// Output:
// TypeError: test3 is not a constructor

// 4) using this keyword with functions

// Regular Function:
const obj1 = {
    name: 'Aman',
    print (){
        console.log(this.name);
    }
};
obj1.print();
// Output:
// Aman

// Explanation:
// Here we got output 'Aman'.because, when this keyword is used with regular function, it refers to the object on which function is called.
// i.e. this will refer to obj1 here.  

// Arrow Function:
const obj2 = {
    name: 'Aman',
    print: () => {
        console.log(this.name);
    }
};
obj2.print();
// Output: 
// undefined

// Explanation:
// Because with arrow functions, when we use this keyword, it refers to outer scope i.e scope where arrow function is defined.

// 5) Implicit and Explicit Return 

// Regular Function: they require to use return keyword if we want to return any data from function.
function returnVal() {
    // "Josh"; // it won't return anything  
    return "Josh"; // We need to explicitly specify return  
}
console.log(returnVal());
// Output: 
// undefined // if not explicitly specified.
// Josh // if return is used.

// Arrow Function:
const returnVal1 = ()=>"AmarTechPark"

console.log(returnVal1());

// Output: AmarTechPark

// Explanation:
// If there is only one expression, then arrow function will implicitly return that value. No need to specify explicitly.
