const userData = {
  users: [
    {
      id: 1,
      firstname: 'Klaus',
      lastname: 'Müller',
    },
  ],
};

function getUserData() {
  return userData.users;
}

console.log(getUserData());

// Variante 1: Callback
function getUserDataAsync(cb: any) {
  setTimeout(() => {
    cb(userData.users);
  }, 2000);
}

function callback(value: any) {
  console.log('callback: ', value);
}
getUserDataAsync(callback);

// callback hell
// fopen('foo', (fd) => {
//   fread(fd, (content) => {
//     fclose(fd, () => {});
//   });
// });

// Variante 2: Promises

function getUserDataPromise(fail = false) {
  return new Promise((resolve, reject) => {
    if (fail) {
      reject(new Error('Foo'));
    } else {
      setTimeout(() => {
        resolve(userData.users);
      }, 2000);
    }
  });
}

const userPromise = getUserDataPromise(true);
userPromise
  .then((data) => {
    console.log('Promise: ', data);
  })
  .catch((error) => {
    console.log(error);
  });

// aufgelöste Promise erzeugen
const p = Promise.resolve(userData.users);
p.then((data) => console.log(data));

/*
let filedescriptor;
fopen()
.then((fd) => {
  filedescriptor = fd;
  return fread(fd);
})
.then(data) => {
  console.log(data);
  fclose(filedescriptor);
})
.catch(e => console.log(e));
*/
