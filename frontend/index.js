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
fetchUserData().then((data) => console.log(data));

function render() {
  const container = document.getElementById('container');
  const div = document.createElement('div');
  div.textContent = 'Klausi!';
  container.appendChild(div);
}
render();
