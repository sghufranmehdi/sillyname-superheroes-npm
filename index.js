//var generateName = require("sillyname");

// changing our code to ecmaScript modules
/*
import generateName from sillyname;
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);


*/

import superheroes from "superheroes";

const name = superheroes.random();
console.log(`My name is ${name}.`);
