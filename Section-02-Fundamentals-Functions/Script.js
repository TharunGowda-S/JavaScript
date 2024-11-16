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
const calcAge1 = (birthyear) => 2024 - birthyear;
const age2 = calcAge1(2000);

console.log(age1, age2);
