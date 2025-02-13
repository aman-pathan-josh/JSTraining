// Complete the above tasks with async/await.

const fetch_data = async ()=>{
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();
    console.log(data);
}

fetch_data();