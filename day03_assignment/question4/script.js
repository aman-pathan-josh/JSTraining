let data = [];
const displayData = (curr_data) => {
  const ele = document.getElementById("table_row");
  ele.innerHTML = "";
  if(curr_data.length === 0){
    ele.innerHTML = `
        <tr>
        <th> No data found! </th>
        </tr>`
  }
  else{

    ele.innerHTML = `
    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Role</th>
    </tr>`;
    curr_data.map((user) => {
      ele.innerHTML += `<tr style="text-align: center;">
      <td class="user_id">${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      </tr>`;
    });
  }
};
const fetchData = async () => {
  try {
    const api_link = "https://api.escuelajs.co/api/v1/users";
    const res = await fetch(api_link);
    data = await res.json();

    displayData(data);
  } catch (err) {
    alert("Error Fecthing Data!");
    console.log(err);
  }
};
fetchData();

const sortBtn = document.getElementById("sortBtn");
sortBtn.addEventListener("click", () => {
  data.sort((user1, user2) => {
    return user1.name.localeCompare(user2.name);
  });
  displayData(data);
});

const searchUser = ()=>{
  const input_value = document.getElementById('search_bar').value.toLowerCase();
  const filteredData = data.filter((user)=>{
    return user.name.toLowerCase().includes(input_value)
  })
  displayData(filteredData);
}
