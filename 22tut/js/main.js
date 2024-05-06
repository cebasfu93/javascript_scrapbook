// Event listeners

// example 1
// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// syntax: addEventListener(event, function, useCapture)

// add event listener - Method 1
// h2.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// add event listener - Method 2
// const doSomething = (event) => {
//   console.log(event.target);
// };
// h2.addEventListener("click", doSomething);

// add event listener - Method 3
// h2.addEventListener("click", function (event) {
//   console.log(event.target);
// });

// remove event listener
// h2.removeEventListener("click", doSomething);

// example 2
// document.addEventListener("readystatechange", (event) => {
//   if (event.target.readyState === "complete") {
//     console.log("readyState: complete");
//     initApp();
//   }
// });

// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener(
//     "click",
//     (event) => {
//       // event.stopPropagation();
//       // view.style.backgroundColor = "purple";
//       view.classList.toggle("purple");
//       view.classList.toggle("darkblue");
//     },
//     false
//   );
//   div.addEventListener(
//     "click",
//     (event) => {
//       // div.style.backgroundColor = "blue";
//       div.classList.toggle("blue");
//       div.classList.toggle("black");
//     },
//     false
//   );
//   h2.addEventListener(
//     "click",
//     (event) => {
//       // event.target.textContent = "Clicked";
//       const myText = event.target.textContent;
//       myText === "My 2nd View" ? (event.target.textContent = "Clicked") : (event.target.textContent = "My 2nd View");
//     },
//     false
//   );
// };

// const nav = document.querySelector("nav");
// nav.addEventListener("mouseover", (event) => {
//   event.target.classList.add("height100");
// });

// nav.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("height100");
// });

//example 3

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("form");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit event");
  });
};
