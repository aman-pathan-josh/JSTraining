// ● Create a validation class similar to ‘Validation’ and add validations for required, min and max
// for strings.
// Expose an isValid method that returns true or false based on the argument passed

class Validation { 
    static isValid(schema,userSchema){
        const errors = []
        Object.keys(schema).forEach((val)=>{
            if(typeof userSchema[val] === schema[val].type ){
                if(schema[val].required && (userSchema[val].toString().length === 0)){
                    errors.push(schema[val].error);
                }

                if(('min' in schema[val]) && (userSchema[val] < schema[val].min)){
                    errors.push(val + " should be greater than " + schema[val].min);
                }
                if(('max' in schema[val]) && (userSchema[val] > schema[val].max)){
                    errors.push(val + " should be less than " + schema[val].max);
                }          
            }else{
                errors.push(schema[val].error);
            }                    
        }); 
        return errors;
    }
}

const schema = {
    name: {
        type:"string",
        error: 'Name should not be empty',
        required:true,
    },
    age: {
        type:"number",
        error: 'Age should not be null or undefined',
        required:true,
        min:18,
        max:25
    },
    address: {
        type:"string",
        error: 'Address should not be empty',
        required:true,
    }
}

const validateSchema = Validation.isValid(schema,{
    name:'A',
    age:20,
    address:'Akurdi, pune'
});

if(validateSchema?.length !== 0){
    console.log("Schema is not Valid!");
    console.log("Errors:");
    
    validateSchema.forEach((error)=>{
        console.log("--",error);
    })
}
else{
    console.log("Schema is valid");
}

