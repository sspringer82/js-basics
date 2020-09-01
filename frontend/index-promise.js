const responsePromise = fetch('http://localhost:8080/users');

console.log('before');
responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
console.log('after');

// json() {
//   const data = '';
//   return new Promise((resolve, reject) => {
//     ReadableStream.subscribe(d => data += d);
//     ReadableStream.end(resolve(data));
//     ReadableStream.error(reject(new Error('foo')));
//   });
// }
