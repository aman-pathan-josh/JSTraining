// ● Implement a Fibonacci sequence generator using a generator function in JavaScript.
function* fibonacci(){
    let a = 0, b = 1;
    while(true){
        yield a;
        let c = a + b;
        a = b;
        b = c;
    }
}

let fib = fibonacci();

console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

// Output:
// 0
// 1
// 1
// 2
// 3
// 5
