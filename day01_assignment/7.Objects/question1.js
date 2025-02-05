// 1. How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: [4, "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const obj1 = {...obj} // shallow copy

const obj2 = {...obj,
    address:{
        ...obj.address,
        details:[...obj.address.details]
    }
} // deep copy

obj2.address.details[0] = 5;

console.log(obj2);
