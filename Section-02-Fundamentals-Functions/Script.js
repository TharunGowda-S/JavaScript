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

//Array are mutable means we can change the Array.
arr1[3] = "vinay";
console.log(arr1);

//JavaScript allows you to omit the new operator when using the Array() constructor.
let artists = Array();

//Some basic methods of the Array are
//1. Push() this methods inserts an new element at the end of the Array
artists.push(10);
console.log(artists);
artists.push("vikas");
console.log(artists);

//2.unshift() this method is also inserts a new Element at the beginning of the Array
artists.unshift(20);
console.log(artists);

//3. pop() this Method is delete the Array elements at the end
artists.pop();
console.log(artists);

//4. shift() this Method is delete the Array elements at the beginning
artists.shift();
console.log(artists);

//Many other Array methods are there more about that in the feature sections.
//[reduce, map ,filter, slice , splice, etc..]

//Objects

//In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
//The key of a property can be a string. The value of a property can be any value, e.g., a string, a number, an array, and even a function.

//JavaScript provides you with many ways to create an object. The most commonly used one is to use the object literal notation.
//The following example creates an empty object using the object literal notation:

let empty = {};

let employee = {
  firstName: "vikas",
  salary: 200000,
  age: 20,
};

//Asscessing the properties of the Object
// the dot (.) notation
//Syntax:objectName.propertyName
//ex:
console.log(employee.firstName);

// the Bracket[] notation
//Syntax:objectName['propertyName']
//When a property name contains spaces, you need to place it inside quotes.
//ex:
console.log(employee["salary"]);

//How can we check if the property exists in an object or not ?
//To check if a property exists in an object, you use the " in " operator.
//Syntax: propertyName in objectName

//ex:
console.log("firstName" in employee);
//console.log(firstName in employee); // throws an error because PropertyName( key ) is a string in object.
console.log("ssn" in employee);

//how to delete a property from an object.
//syntax: delete objectName.propertyName.
//ex:
console.log(employee.age);
delete employee.age;
console.log(employee.age);

// Object Methods
// we can pass the functions as a value in the object and the function defined inside an object is called Method.
let person = {
  FirstName: "vijay",

  LastName: "sreeman",
  friends: ["Eshwar", "Mahesh", "vikas"],
  salary: 30000,
  calcage: function (birthyear) {
    //this keyword is points the object that is belongs to
    //console.log(this);
    this.age = 2024 - birthyear;
    return this.age;
  },
  // we cannot use the function decleration inside the object.
};

//to access the method in the object
console.log(person.calcage(1999));
console.log(person.age);

//For-loop
//printing a same message in multiple times
console.log(" hii ");
console.log(" hii ");
console.log(" hii ");
// the above code shows the static behaviour each time we are printing the same message
// how to achive this in dynamic way.
// here looping comes in to picture.
for (let i = 1; i < 3; i++) {
  console.log(" hii " + i);
}
// in this above code we wrote the log message at one place but it executes 3 times as your wish.
// in for loop it initializes a variable called i and assigned a value 1 and we also mention the condition i<3;
// weather the condition is true control enters into the loop and executes the statements inside a loop and move to increment part in for loop and executes the
// loop until und unless the condition becomes false, then it exits the loop.

//iterating (looping) Arrays.
const personDetails = [
  "ShriMan",
  "Sri",
  20,
  ["vishnu", "pradyumna", "Sankarshana"],
  300000,
  "Software Engineering",
];

for (let i = 0; i < 5; i++) {
  console.log(personDetails[i]);
}
console.log("============================");
//in the above code we are hard coded the condition in the for loop
// to make this as a dynamic we have to use a special property of Array called Array.length (personDetails.length in this case)
for (let j = 0; j < personDetails.length; j++) {
  console.log(personDetails[j]);
}
