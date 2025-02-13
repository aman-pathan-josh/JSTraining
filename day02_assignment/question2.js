// Using promises - write a function that fetches data from an API endpoint 
// (GET https://reqres.in/api/users ). Log the data into the console once it is received

const fetch_data = ()=>{
    fetch('https://reqres.in/api/users').then(response => {
        return response.json();
    }).then(data => {
        console.log(data.data);
    }).catch((err)=>{
        console.log(err);
    });
}

fetch_data()