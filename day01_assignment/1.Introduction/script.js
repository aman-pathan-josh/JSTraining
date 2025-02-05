btn2 = document.getElementById("btn2")
age_span = document.getElementById("age_span")

btn2.addEventListener("click",()=>{
    let age = prompt("Enter Your Age")
    age_span.innerHTML = age + " years"
})