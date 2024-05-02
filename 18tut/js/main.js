// classes

// example 1
// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }

//   // get pizzaCrust() {
//   getCrust() {
//     return this.crust;
//   }
//   // set pizzaCrust(pizzaCrust) {
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   getToppings() {
//     return this.toppings;
//   }
//   setToppings(topping) {
//     this.toppings.push(topping);
//   }

//   bake() {
//     console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza.`);
//   }
// }

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// console.log(myPizza.getCrust());
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());

// example 2 - inheritance
// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//   }

//   getCrust() {
//     return this.crust;
//   }
//   // set pizzaCrust(pizzaCrust) {
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
// }

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
//   }
// }
// const mySpecialty = new SpecialtyPizza("medium");
// console.log(mySpecialty.slice());

// example 3 - factories
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();  // TADA?

// example 4 - Public and Private
class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(`Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
  }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.sauce); // undefined
// console.log(myPizza.#sauce); // error
