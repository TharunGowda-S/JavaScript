"use strict";
//Strict mode defines javascript code should be executed in strict mode.
//The "use strict " mode directive was new in ecmascript version 5
//The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
//a = 20;
//console.log(a);
let a = 50;
console.log(a);

//Functions
//Functions are the block of code that is used to perform some specific task.
//we can also reuse the function when that is needed by just calling it.
//Pre-Defined functions(Libraries)=> These are the functions that are already written by some other developers that can be used some
//others by invoking them in their code. this process reduce the work of writing functions from the  scratch.
//these functions are also called as built-in functions.

//How to declare the function
//To declare a function, you use the function keyword, followed by the function name, a list of parameters, and the function body as follows:
//Sytax:
function functionName(parameters) {
  // function body
  // ...
}

//ex:
//function declaration
function Greet() {
  // function declaration
  //Body of the function
  console.log(" hello 👋 This is a Message function ");
}

//invoking / calling / running the function
const msg = Greet();
Greet();
//console.log(msg);

//Parameters=> parameters are like a variables that are only specific to the function that shoud be initialized when we declare the function.
//arguments=> arguements are the values provided to the parameters that are passed when the functions are called.

//Function Expressions
const CalcAge = function (birthyear) {
  return 2024 - birthyear;
};
const age1 = CalcAge(1999);

//Arrow Function

//Arrow Functions are introduced in ES6. it provide a shorter way to write the function as compared to function Expression.
//Return will implicitly called, if the function as a single statement and  without block{}
//if you use the block syntax, you need to explicitly use the return keyword.
//The arrow function is also an instance of the Function type.

const calcAge1 = (birthyear) => 2024 - birthyear;
const age2 = calcAge1(2000);

console.log(age1, age2);

let add = (x, y) => {
  return x + y;
};
console.log(add(5, 2));

//function Expressions Return an Object Literals
let setColor = function (color) {
  return { value: color };
};

let backgroundColor = setColor("Red 🔴");
console.log(backgroundColor.value);

//we cannot Return an Object literal from an Arrow Functions while  function expressions can do.
let setColor1 = (color) => {
  value: color;
};
let color = setColor1("yellow 🟡");
console.log(color); //this will gives an undefined.

//Since both block and object literal use curly brackets, the JavasScript engine cannot distinguish between a block and an object.

//To fix this, you need to wrap the object literal in parentheses
let setColor2 = (color) => ({
  value: color,
});
let color1 = setColor2("green 🟢");
console.log(color1.value);

//Limitations of Arrow Functions
//Arrow functions doesnot have their own this, constructor and super and doesn't called as method
//Arrow functions cannot be used as constructors. Calling them with new throws a TypeError.

//Functions calling another functions

const fruitPieces = function (fruit) {
  return fruit * 4;
};

const FruitProcessors = function (apple, mango) {
  const applePieces = fruitPieces(apple); // Here fruitPiecess functions are called and store the returned value into variable.
  const MangoPieces = fruitPieces(mango); // here Inside the FruitProcessor function another function fruitPieces are called.

  const juice = ` Juice with ${applePieces} pieces of apple and ${MangoPieces} of mangoes`;
  return juice;
};

const juice = FruitProcessors(2, 3);
console.log(juice);

//Reviewing functions
const calcAge = function (birthyear) {
  return 2022 - birthyear;
};
const yearsUntilRetirement = function (birthyear, firstname) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstname} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstname} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1999, "Tharun"));
console.log(yearsUntilRetirement(1997, "Varun"));

//before Knowing Arrays
const friend1 = "Ajay";
const friend2 = "vikas";
const friend3 = "gowda";

//when we want to store 10 friend names the above sytax is more complicated
// here Array commes into the picture.
/* Array is an ordered list of values. Each Value is called as an element specified by an index.
   Array is also A type of data Structure.
   An element in array can be any type (it could be Number,String, Boolean, Object and null)
   behind the Sence An Array can be the Constructur fuction , Array Literals is the instance of that Constructor Function.*/

//The size of an array is dynamic and auto-growing. In other words, you don’t need to specify the array size up front.

const friendNames = ["Ajay", "vikas", "Gowda", "Vijay"];
console.log(friendNames);

//How to access the single (particular) Element from the Array.
//Array index starts from the "0".
console.log(friendNames[0]);
console.log(friendNames[2]);

//to know how many Elements are there in the Unknown Array
//Array Can have a special property called "length", it returns the elements count of an Array.
console.log(friendNames.length);

// Arrays are Hetregeneus means it can store any type of elements
const array1 = [
  " ram ",
  22,
  true,
  null,
  { pincode: 572106, addresss: "mysore" },
  "Developer",
];

console.log(typeof array1); //array1 is an instance of the Array Constructor Function
console.log(typeof Array); //returns Function
console.log(Array);

//how to define or Declare an Array
//in two types can declare or define the array
const arr = new Array(); // creating an empty array object
console.log(typeof arr, arr);

//another type
const arr1 = [1, 2, 3, 4, 5];

console.log(typeof arr1, arr1); //literal type
