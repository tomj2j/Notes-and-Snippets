const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //readyState 4 means the process is done.
    if (request.readyState === 4 && request.status === 200) {
      // create a JS Object from the received JSON data
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback(request.status, undefined);
    }
  });
  //We need to open the request
  request.open("GET", resource);
  //And we need to send the request
  request.send();
};

// ////CALLBACK HELL
// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

//PROMISSES
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // Promise is either resolved/rejected
    // fetch something
    resolve("some data");
    reject("some error");
  });
};

getSomething().then((data) => {
  console.log(data);
});
// -> some data

// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/shaun.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });
