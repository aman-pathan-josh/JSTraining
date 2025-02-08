// 2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using 
// Object.keys and Object.entries. 

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

const filterObject = () =>{
    let result = {}

    Object.entries(obj).filter((ele)=>{
        if(typeof(ele[1]) !== 'object'){
            result[ele[0]] = ele[1];
        }
    })

    console.log(result);
}

filterObject(obj);
