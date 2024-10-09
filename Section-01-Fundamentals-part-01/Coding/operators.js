//Operators
// operators are the symbols that are required to perform some operations(tasks) mainly some calculations.
// there are many types of operators are there
//1. Arithmatic Operators
//these are the operators that are used to perform some basic arithmatic operations.
// such as (+,-, /, %, *)
let a = 10;
let b = 20;
let sum = a + b; // performs the addition
console.log(sum);
let difference = b - a; //performs the substarction
console.log(difference);
console.log(a / b); //performs the division
console.log(a % b); // returns the remainder
console.log(a * b); // returns the product of a and b

//2.Assignment operator
// these are the kind of operators that are used to assigning or setting some value or functionality to the variable
// ex: =, +=, -=,*=,/=
let x = 100; // here 100 is the value uses the = operator to store the value inside the variable x.
console.log(x);
x += 10; // adding the 10 to the x.
console.log(x);
x -= 30;
console.log(x);

let y = 200;
console.log(y);
y *= 2;
console.log(y);
y /= 2;
console.log(y);
y %= 3;
console.log(y);

//3. comparision operator
// comparision operators are used to perform comparision between two operands(variables).
// ex: >,<,<=,>=,==,===
//it always leads to boolean result.
console.log(x > y); // true because 2 is lesser than 100.
console.log(x < y); //false x bcz 100 is greater than 2

let i = 10;
console.log(i <= 10); // returns true bcz 10=10.
console.log(i <= 11); // returns true bcz 10<11.

//Note( more about == and === in feature sections)

//Logical Operators
// Logical operators are the operators are used to (calculate)  deals with boolean values
//ex: AND(&), OR(|), NOT(!)

// operators precedence
// operator precedence is order in which the operators are performed in the expression with multiple operators
const now = 2024;
const JonasAge = now - 1998;
const SaraAge = now - 2000;

console.log(JonasAge, SaraAge);
const AvgAge = JonasAge + SaraAge / 2;
console.log(AvgAge);

console.log((JonasAge + SaraAge) / 2);

//coding Challenge-01
/* Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 
GOOD LUCK 
*/
const MarksMass = 78;
const MarksHeight = 1.69;

const JhonsMass = 92;
const JhonsHeight = 1.95;

const MarksBMI = (MarksMass / MarksHeight) ** 2;

const JhonsBMI = (JhonsMass / JhonsHeight) ** 2;

const markHigherBGM = MarksBMI < JhonsBMI;
console.log(markHigherBGM);

console.log("javascript string \n contains \n multiple lines");
console.log(` javascript string contains
    multiple lines`);

//Type conversion and type coercion

//Type Conversion means manually converts one type to another(explicitly)
//type coercion means javascript automatically converts the type behind the sence(implicitly)
//type coercion will happens whenever an operator is dealing with two values of different types
//behind the sence js convert one values to match the another values

//example:
const inputyear = "1991"; // it is string basically.
console.log(Number(inputyear)); // this function will convert the  string into number explicitly ( type convertion)
console.log(+inputyear); // this is lso done the type convertion
console.log(+inputyear + 18); // this will convert and adds

console.log(Number("vikas")); // this will NaN bcz " vikas" is a string only it would be convert it to the number NaN = invalid number
console.log(typeof Number("vikas"));
console.log(String(23), 23);

//Type coercion Example
console.log(" i am " + 25 + "years old");
console.log(25 - 10 - "5");

//Truthy and falsey values
//Falsey values are the values are not exactly false but will become false when try to convert it to boolean.('0','undefined',' ',null, NaN)
//truthy values are true when we try to convert it to boolean it will become truthy.(any Non-Empty string, emptyobject)

console.log(Boolean(0), 0);
console.log(Boolean(undefined));
console.log(Boolean(23));
console.log(Boolean("hii"));
console.log(Boolean({}));

let money = 100000;
if (money) {
  console.log(" don't spend it all ");
} else {
  console.log(" first you get the job ");
}

let height = 6.0;
if (height) {
  console.log(" height is defined");
} else {
  console.log(" height is UNDEFINED ");
}

//Equality Operators(== vs ===)
// strict Equality (===) operator returns a boolean value if both the operands are match byt their value and type
// it does not perform  type coercion.
// Loose Equality (==) operator returns a boolean value. If both the values are matched returns true else false.
//it perform type coercion.

//Boolean logic
// Boolean logic uses true and false values to sole the complex logical values.

//AND, OR ,NOT operators these operators are called Boolean Operators
const hasDriverLisence = true;
const hasGoodVision = false;

//Logical AND operator : it is denoted by symbol & it returns true if both the operands having a truthy value else false
console.log(hasDriverLisence & hasGoodVision); //returns  1 refers to true , 0 refers to false
console.log(hasDriverLisence && hasGoodVision); //returns false or true.

//Logical OR operator: it is denoted by symbol | it returns true if only one operator is true else return false.
console.log(hasDriverLisence || hasGoodVision);

//Logical NOT operator : it is denoted by (!) it inverts the value of the single operand if the value is true it inverts value as false and vice cersa.
//console.log(hasDriverLisence !! hasGoodVision);// it doesnot work with multiple operands.
console.log(!hasDriverLisence && !hasGoodVision);
console.log(!hasGoodVision); // inverts the hasGoodVision in to true.

//Switch Statement
let day = "Friday";

switch (day) {
  case "monday":
    console.log(" prepare the course plan");
    console.log(" start preparing React");
    break;
  case "tuesday":
    console.log(" lear from videos ");
    break;
  case "wednesday":
    console.log(" revise the previous ");
    break;
  case " thursday":
    console.log("make the theory notes ");
    break;
  case "Friday":
    console.log("read the Documentation");
    break;
  case "saturday":
  case "sunday":
    console.log(" enjoy the weekend");
    break;
  default:
    console.log(" not a valid day");
}
day = "wednesday";
if (day === "monday") {
  console.log(" prepare the course plan");
  console.log(" start preparing React");
} else if (day === "tuesday") {
  console.log(" lear from videos ");
} else if (day === "wednesday") {
  console.log(" revise the previous ");
} else if (day === "thursday") {
  console.log("make the theory notes ");
} else if (day === "Friday") {
  console.log("read the Documentation");
} else if (day === "saturday" || day === "sunday") {
  console.log(" enjoy the weekmend ");
} else {
  console.log(" not a valid day");
}

//Statement and expressions
// Expressions is the code that produces some value .
// ex: 5+6, true && false & !false, 1232, true

//statements : statements is a bigger piece of code that will be executed but not produces any value.
//ex: if else statement, switch statement

//conditional( ternary) operators
//these operators allows us to write if else statements by reducing it into one line by using symbols(?:)
const age = 18;
age >= 18
  ? console.log(" i able to drive 🚘")
  : console.log(" i  like to drive  🚴");

// we can store this expression value into a variable
const drive = age >= 18 ? "can drive 🚘" : " ride  bicycle 🚴";
console.log(drive);

let drive2;
if (age >= 18) {
  drive2 = "can drive 🚘";
} else {
  drive2 = "ride  bicycle 🚴";
}
console.log(drive2);

console.log(
  ` i would like to ${age >= 18 ? "drive  a car 🚘" : "  ride a Bicycle 🚴 "} `
);
