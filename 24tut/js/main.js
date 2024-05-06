// modules
// IMPORT AS EXPORTED
// import playGuitar, { plucking, shredding } from "./guitars.js";
// console.log(shredding());
// console.log(plucking());

// IMPORT WITH ALIAS
// import playGuitar, { plucking as fingerpicking, shredding as shred } from "./guitars.js";

// console.log(playGuitar());

// console.log(shred());
// console.log(fingerpicking());

// IMPORT WITH MODULE ALIAS AND EXPORT ALIAS
// import * as Guitars from "./guitars.js";
// // console.log(Guitars.playGuitar()); // crashes because playGuitar is not a function, it is a "default object"
// console.log(Guitars.default());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());

// IMPORT A CLASS

import User from "./user.js";
const me = new User("email@email.com", "Sebastian");
console.log(me);
console.log(me.greeting());
