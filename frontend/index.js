// (async function () {
//   try {
//     const response = await fetch('http://localhost:8080/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }
// })();

async function fetchUserData() {
  try {
    const response = await fetch('http://localhost:8080/users');
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
fetchUserData().then((data) => render(data));

function render(data) {
  const container = document.getElementById('container');
  data.forEach((user) => {
    const row = document.createElement('div');
    row.textContent = `${user.firstname} ${user.lastname}`;
    container.appendChild(row);
  });
}
document.addEventListener('DOMContentLoaded', function (event) {
  render();
});
