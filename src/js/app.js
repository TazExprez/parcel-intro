// The CommonJS way uses require, while the ES6 way uses import.

// CommonJS Way
// var numbers = require("./numbers.js");
// var math = require("./math.js");

// ES6 Way
import numbers from "./numbers.js";
import math from "./math.js";
// import _ from "lodash";
// If we import our CSS and SCSS in the app.js file, then we won't have to manually refresh the browser sometimes.
import "../scss/main.scss";

// console.log("Hey your boy is back live!");

// console.log(numbers);

// console.log(math.add(numbers.Johnny, numbers.James));
// console.log(_.add(numbers.Johnny, numbers.James));

console.log(math.add(numbers.Johnny, numbers.James));
