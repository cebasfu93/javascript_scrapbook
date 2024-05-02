// example 1
const myObj = { name: "Sebastian" };
console.log(myObj.name);

// example 2
const myOtherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: { morning: "coffee", afternoon: "iced tea" },
};

console.log(myOtherObj.beverage);

// example 3
const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};
const truck = Object.create(vehicle);
console.log(truck);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "whoosh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () {
  return "Ssshh...";
};
console.log(tesla.engine());

// iterate over property names
for (let prop in tesla) {
  console.log(`Prop: ${prop} has value ${tesla[prop]}`);
}

// check if property exists
console.log(tesla.hasOwnProperty("engine"));

// destructuring objects
const { doors: myVariable } = tesla;
console.log(myVariable);

const { doors, engine } = tesla;
console.log(doors);
console.log(engine);

// destructuring objects in function arguments
function myFunction({ doors, engine }) {
  console.log(engine(), doors);
}

myFunction(tesla);
