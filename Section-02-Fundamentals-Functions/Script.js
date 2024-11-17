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
