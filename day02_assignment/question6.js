// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.

const promise_func = () => {
    return new Promise((resolve, reject)=>{
        fetch('https://reqres.in/api/users').then((res)=>{
            setTimeout(()=>{
                resolve(res.json());
            },2000);
        }).catch((err)=>{
            reject('error fetching data',err);
        });
    })
};

promise_func().then((data)=>{
    console.log(data.data);
}).catch((err)=>{
    console.log(err);
})