// Callbacks, Promises, Thenable, and Async/Await

// CALLBACKS
// function firstFunction(parameters, callback) {
//   // do stuff
//   callback()
// }

// "CALLBACK HELL"
// firstFunction(para, function () {
//   secondFunction(para, function () {
//     thirdFunction(para, function () {
//       // and so on
//     });
//   });
// });

// PROMISES
// FULFILLED AND REJECTED PROMISES
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No! rejected the promise!");
//   }
// });

// console.log(myPromise);
// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// PROMISES ARE ASYNC
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No! rejected the promise!");
//   }
// });
// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved!");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

// PENDING PROMISES
// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// console.log(users);

// ASYNC/AWAIT
// const myUsers = {
//   userList: [],
// };

// option 1
// async function myCoolFunction() {
//   // do something
// }

// option 2 (arrow function)
// const myCoolFunction = async () => {
//   //do something
// };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// };

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };
// anotherFunc();
// console.log(myUsers.userList);

// EXAMPLE 1
// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   const userEmailArray = jsonUserData.map((user) => user.email);
//   postToWebPage(userEmailArray);
// };
// const postToWebPage = (data) => {
//   console.log(data);
// };
// getAllUserEmails();

// EXAMPLE 2 - SECOND ARGUMENT OF FETCH
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const textJokeData = await response.json();
//   console.log(jsonJokeData.joke);
// };
// getDadJoke();

// EXAMPLE 3 - POSTING
// const jokeObject = {
//   id: "123",
//   joke: "This is a joke",
// };
// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });
//   const jsonResponse = await response.json();
//   console.log(jsonResponse.headers);
// };
// postData(jokeObject);

// EXAMPLE 4
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
