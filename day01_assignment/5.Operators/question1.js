// Question 1. What is the difference between ++i and i++? 

// Answer:
// in ++i we are pre-incrementing the value of i.
// that means code written after ++i will will consider incremented value of i
// Example :
    let i = 2
    let c = (++i) + (i++)
    console.log(c);
    console.log(i);
// Output: 
// 6
// 4
// ++i -> 3 and then we are adding i++ i.e. 3, so value of c beacomes 6 and i becomes 4

    