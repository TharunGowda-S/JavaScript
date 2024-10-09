//Values and Variables
//values: The piece of data is the value ( it could be the Numerics, String or Boolean )
//Variable : Variable is the place there we can store our value or( a piece of data )

//Q: Is the any specified quantity of the value that can be stored in side the variable?
//or is there any specific memory size is there to store the value in variable?
//A: In javascript  The answer is NO we not limit of size store a value

let b = "ghugjh blghgijkhkl huihkjl.kl ihiojknl hgytfhghjhkjhklj";
console.log(b);

let c = 678980898765545567898087654;
console.log(c);

let a = 10;

a = "amazing";
console.log(a);
let firstName; // Declaring the variable , and it  will create a firstName variable in the memory to the store some value;
firstName = "Tarun"; // initialization the same craeted firstName variable
console.log(firstName);

//Naming Conventions of the variable
//* Variables are Named with the Camel Case letters
//* Underscores and dollor  are allowed in the variables
//* Reserved keywords are not allowed as variable names

let name = "virat";
console.log(name);

let _Name = "raj";
console.log(_Name);

let personName = "Tharun";
console.log(personName);

let PersonName = "vikas";
console.log(PersonName);

//let 3years=3;// it will throw the syntax error bcz variable name did not start with the numerics.
//let new =23;// it will not allowed bcz new is a reserved keyword in JS we cannot use the Reserved keywords as a variable.
//let name="varun";// it is also allowed but still it is not recomonded bcz it is also a kind of reserved keyword
//variables are written in uppercase  are used for constant values that cannot be changed
//let VALUE = 34; it is also allowed but not recommonded to use.
//console.log(VALUE);
//Variable names are case-sensitive. This means that the message and Message are different variables.
//Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces. Also, variable names must begin with a letter, an underscore (_) or a dollar sign ($).
// Variable names cannot use the reserved words.

// commenting styles
//-> single line comments
/* multi-line comments */

//DataTypes
/* DataTypes=> Data type refered to the type of information or a data or value that we have stored in the variable 
              wheather it could be a numerics, Strings, boolean etc.. 
    * JavaScript is a dynamically typed language, meaning that a variable isn’t associated with a specific type. 
    * In other words, a variable can hold a value of different types.
    * for instance
    * let a=10;
    * a="ram";
    * a="true"
    * in tha above instance first a is initiaized to numeric value later it is string and boolean
    * hence it is not a rule to assign a specific type of value.
              
*/
//Types of Data Types
/* DataTypes has two types 
         primative Datatypes                                            Non-Primtive DataTypes
  * primatives are the built in data-types                   * Non-primative Datatypes are AKA References Datatypes that are 
  * provided by the js Language itself                       * that are created by programmer itself. these are not pre-defined by language.
 ex: numbers, strings , boolean etc..                        ex: Array, Object


*/

//Primative Data-type
//1. Number=> Number Datatype represents both integer and floating-point numbers
// example: let num=20;
// let num1=4.6;
//let num2=40.87;

//The reason is that Javascript always wants to use less memory since a floating-point
//value uses twice as much memory as an integer value.
// example:
let price = 200.0; // interpreted as an integer 200
console.log(price);

//2. String=>
// A String is a Sequence of  multiple characters and that should be enclosed with in single or double quotes("")('') or backticks(``)
// example:
let FirstName = "Rajesh";
let secondName = "vikas";
// let name='raj";// invalid bcz starting and ending quotes should be matched.

//If you want to use single quotes or double quotes in a string, you need to use the backticks to escape them
//example
let sentence = ` " hii welcome to javascript " `;
console.log(sentence);

// let message = "I'm also a valid string"; // use \ to escape the single quote (')
// console.log(message);

//Javascript strings are immutable
//3. Boolean => boolean type has two literal values such as "true" and "false"
//example:
//let inProgress = true;
let completed = false;

console.log(typeof completed);

//NaN
// NaN stands for Not a number it is a special numeric value that refers invalid number
//for instance:
let fruit = "Ba" + 2 / a + "a";
console.log(fruit);
// in the abocve instance number is not divided by the character it returns NaN.

//4. Null
//Null is also a one of the data type in javascript it stores only the null value
//The typeof null returns object is a known bug in JavaScript.
//A proposal to fix was rejected due to the potential to break many existing sites.

let obj = null;
console.log(typeof obj);

//5.undefined
// The undefined type is a primitive type that has only one value undefined.
// By default, when a variable is declared but not initialized, it defaults to undefined.
let counter;
console.log(counter);
console.log(typeof counter);

console.log(typeof undeclaaredvar);

//6.Symbol
//ES6 added Symbol as a new primitive type.
//Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t have a literal form.
let s = Symbol();
console.log(s);
console.log(typeof s);
console.log(s === Symbol());

//7. BigInt
//ES2020 introduced a new built-in object called BigInt that allows you to represent whole numbers larger 253 - 1.
//To make a BigInt, you append n to the end of the number literal,
//example:
let bigInt = 9007199254740991n;
console.log(bigInt);

//Non-primative types
//1. Object
//In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.
//example:
let person = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person);
