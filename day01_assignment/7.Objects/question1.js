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
        details:[5,...obj.address.details.slice(1,obj.address.details.length+1)]
    }
} // deep copy


console.log(obj2);
