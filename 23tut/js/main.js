// Web Storage API

// THE "window" GLOBAL VARIABLE
// alert("foo");
// window.alert("foo");

// console.log(location);
// console.log(window.location);

// SESSION STORAGE
// const myObject = {
//   name: "Sebastian",
//   hobbies: ["eat", "sleep", "code"],
//   logName: function () {
//     console.log(this.name);
//   },
// };

// // myObject.logName();

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);
// console.log(typeof mySessionData);

// LOCAL STORAGE
const myObject = {
  name: "Sebastian",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

localStorage.setItem("myLocalStore", JSON.stringify(myObject));

// localStorage.removeItem("myLocalStore");
// const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(myLocalData);
// console.log(typeof myLocalData);

// localStorage.clear();

// const key = localStorage.key(0);
// console.log(key);

storeLength = localStorage.length;
console.log(storeLength);
