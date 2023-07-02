// Advance Javascript

import { flattenOptionGroups } from "@mui/base";
import { ConstructionRounded } from "@mui/icons-material";

// Scope
var fun = 7;
function funn(params) {
  var fun = "Hi Jedi";
  console.log(fun);
}
function funer() {
  var fun = "Hey";
  console.log(fun);
}
function funest() {
  fun = 10;
  console.log(fun);
}
console.log(fun);

// ternary operator and Switc

function isUserValid(bool) {
  return bool;
}

function ifVersion() {
  "Your account is ";
  if (isUserValid(true)) {
    return "1234";
  } else {
    return "not valuid";
  }
}

var ternaryVer =
  "Your account is " + (isUserValid(false) ? "1234" : "access denied");

function movement(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you arrived home";
      break;
    case "back":
      whatHappens = "you're away from home";
      break;
    case "left":
      whatHappens = "you left home";
      break;
    case "right":
      whatHappens = "you are right at home";
      break;

    default:
      whatHappens = "pls enter valid direction";
  }
  return whatHappens;
}

// ES5 and ES6
// let
// const player = "Jedi";
// let experience = 100;
// let wizardLevel = "monk";

// if (experience > 90) {
//   let wizardLevel = "monker";
//   console.log("inside", wizardLevel);
// }

// console.log("outside", wizardLevel);

const player = "Jedi";
player = "Bebi";
let experience = 100;
var wizardLevel = "monk";

function aa() {
  let wizardLevel = "monker";
  console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);
aa();

// object in const
// const jedi = {
//   age: 2,
//   gender: "male",
//   favorite: "fries",
// };

// const { age, gender } = jedi;
// const { favorite } =jedi

// console.log(age);
// console.log(gender);
// console.log(favorite);

// let age = jedi.age;
// let gender = jedi.gender;
// let favorite = jedi.favorite;

// const { age, gender } = jedi;

// jedi.favorite = "adobo";
// console.log(jedi);
// jedi = 2;

// const name = "jedi";

// const obj = {
//   [name]: "bebi",
//   [1 + 2]: "hihi",
// // };

// const a = "one";
// const b = "two";
// const c = "three";

// const obj = {
//   a,
//   b,
//   c,
// };

// console.log(obj);

// template strings

const age = "2";
const gender = "male";
const favorite = "fries";
const name = "Jedi";

const greetings = "Hello " + name + "." + "You looki like " + age;
const greetings2 = `Hello ${name}. You look like ${age}`;
console.log(greetings);
console.log(greetings2);

function greeting(name = "Jedi", age = "7") {
  return (greetings2 = `Hello ${name}. You look like ${age}`);
}
greeting();

// arrow function

function add(a, b) {
  return a + b;
}

const addd = (a, b) => a + b;

add(1, 2);
addd(2, 2);

// advanced function
// function first(){
//   var greet = 'Hi';
//   function second(){
//     alert(greet)
//   }
//   return second()
// }

// first()

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second();
};

const newFunc = first();

// Currying
const multiply = (a, b) => a * b;
const curriedFunc = (a) => (b) => a * b;
const multiplyBy5 = curriedFunc(5);
curriedFunc(3);
multiplyBy5(5);

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(6);

// Advance array
const array = [2, 4, 6, 8, 19];
const doubleArray = [];
const newArray = array.forEach((a) => {
  doubleArray.push(a * 2);
});

console.log("forEach", doubleArray);

const mapArray = array.map((a) => a * 2);
console.log("map", mapArray);

// filter

const filterArray = array.filter((a) => a > 5);
console.log("filter Array", filterArray);

// Reduce

const reduceArray = array.reduce((acc, a) => {
  return acc + a;
}, 1);
console.log("reduce", reduceArray);

// Advance Objects
// Reference types
const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

obj2 === obj1;
obj3 === obj1;

// context
console.log(this);

function a() {
  let b = 1;
  console.log(this);
}
a();

// Instantiation

class Player {
  constructor(name, type) {
    console.log("player", this);
  }
  introduce() {
    console.log(`Hi I am ${this.name}, and I'm ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Jedi", "Pogi");
const wizard2 = new Wizard("Bebi", "Ganda");

// Pass by value
let a = 5;
let b = a;
b++;

console.log(a);
console.log(b);

// pass by reference
let obj1 = { name: "Jedi", pw: "test" };
let obj2 = obj1;

obj2.pw = "nice";
console.log(obj1);
console.log(obj2);

let obj3 = { a: "a", b: "b", c: { deep: "hahah" } };
let clone = Object.assign({}, obj3);
let clone2 = { ...obj3 };
let superClone = JSON.parse(JSON.stringify(obj3));

obj3.c.deep = "huhuh";
console.log(obj3);
console.log(clone);
console.log(clone2);
console.log(superClone);

// ES7
// includes

// Exponential
const square = (x) => x ** 2;

// ES8
"Turtle".padStart(2);
"Turtle".padEnd(2);

// trailing commas
const fun = (a, b, c, d) => {
  a, b, c, d, console.log(a);
};

fun(1, 2, 3, 4);

// object.values

let obj = {
  user0: "Jedi",
  user1: "Bebi",
};
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach((value) => {
  console.log(value);
});
Object.entries(obj).forEach((value) => {
  console.log(value);
});
Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});

// ES10
// flat()
const array1 = [1, 2, 3, 4, 5];
array1.flat();
console.log(array1);

const array2 = [1, 2, [3, 4, [5, 6]]];
array2.flat(2);
console.log(array2);

const entries = ["bebi", "jedi", , , , , "nanay"];
entries.flat(3);
console.log(entries);

// flatmap
// const entries = ["bebi", "jedi", , , , , "nanay"];
const newEntries = entries.flatMap((entry) => entry + " yehey");
console.log(newEntries);

// trimStart()
const email1 = "         shernof78@gmail.com";
const email2 = "shernof78@gmail.com      ";
console.log(email1.trimStart());
console.log(email2.trimEnd());

// fromEntries()
const profile = [
  ["jedi", 2],
  ["bebi", 41],
  ["shernof", 43],
];
Object.fromEntries(profile);

// entriesd from ES8
const obje = Object.fromEntries(profile);
console.log(obje);

// try/catch block

try {
  bob + "hi";
} catch {
  ("messed up");
}

// 172 Advance Loops
const basket = ["grapes", "orange", "apple"];

// 1
for (var i = 0; i < basket.length; i++) {
  console.log("for", basket[i]);
}

// 2
basket.forEach((item) => {
  console.log("forEach", item);
});

// new
// for of - iterate elements of arrays and strings
const basket = ["grapes", "orange", "apple"];
for (item of basket) {
  console.log(item);
}

// for in - enumerate object properties
const detailedBasket = {
  grapes: 100,
  orange: 200,
  apple: 1000,
};
for (item in detailedBasket) {
  console.log(item);
}
