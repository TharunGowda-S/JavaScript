//Destructuring Arrays
// Array Destructuring means Unpack the values are stored in the Array in to a single variable.
//ex:
let fruits = ["apple", "ki-wi", "mango", "chickoo", "buterfruit"];
console.log(fruits);
let [f1, f2, f3, f4, f5] = fruits;
console.log(f1, f2, f3, f4, f5);
let [fruit1] = fruits;
console.log(fruit1);

// using number as a variable is not valid
//let [1,2,3]=["a","b","c"];
//console.log(1,2,3);

console.log("==============================");

// key points of Array destructuring
// order matters: the order of variables in the LHS is corresponds to the values in  the given array.
// skipping elements: we can also skip the elements by using a comma and leaving the space in the destructuring patterns.
// ex:
const [b, , c, d] = ["apple", "mango", "chickoo", "muskmelon"];
// here the element mango is skipped because as we used space seperated by comma.
console.log(b, c, d); // apple, chickoo, muskmelon
