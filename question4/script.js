let data = []
const displayData = ()=>{
    data.map((user) => {
        const ele = document.getElementById("table_row");
        ele.innerHTML += `<tr style="text-align: center;">
                                      <td class="user_id">${user.id}</td>
                                      <td>${user.name}</td>
                                      <td>${user.email}</td>
                                      <td>${user.role}</td></tr>`;
      });
}
const fetchData = async () => {
  try {
    const api_link = "https://api.escuelajs.co/api/v1/users";
    const res = await fetch(api_link);
    const res_json = await res.json();
    data = res_json.slice(0, 20);

    displayData();
  } catch (err) {
    alert("Error Fecthing Data!");
    console.log(err);
  }
};
fetchData();

const sortBtn = document.getElementById("sortBtn");
sortBtn.addEventListener("click",()=>{
    data.sort((user1,user2)=>{
        return user1.name.localeCompare(user2.name);
    });
})