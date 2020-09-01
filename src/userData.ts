import axios from 'axios';

async function fetchUserData() {
  try {
    const { data } = await axios.get('http://localhost:8080/users');
    return data;
  } catch (e) {
    console.error(e);
  }
}
fetchUserData().then((data) => console.log(data));
