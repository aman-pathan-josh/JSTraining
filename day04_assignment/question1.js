const memoizeSquare = ((square)=>{
    let cache = new Map();
    
    return (inp_val)=>{
        if (cache.has(inp_val)){
            console.log("Returning from cache memory");
            return cache.get(inp_val);
        }
        else{
            let result = square(inp_val);
            cache.set(inp_val,result);
            return result;
        }
    }
})

const square = (a)=>{
    return a*a;
}
const getSquare = memoizeSquare(square); 
console.log(getSquare(2));
console.log(getSquare(3));
console.log(getSquare(2));

// Output:
// 4
// 9
// Returning from cache memory
// 4
