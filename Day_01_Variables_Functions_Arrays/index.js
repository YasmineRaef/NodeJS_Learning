/* 
Write a script to store your name, age, 
and hobbies (array) in variables, then log them.
*/

let name = "Yasmine Raef Mohamed";
const age = 21;
var hobbies = ["Reading", "Coding", "Volleyball"];
console.log(`My name is ${name}, I am ${age} years old, and my hobbies are: 
${hobbies.join(", ")}.`);

///--------------------------------------------

/*
Create a function that takes a number and returns “even” or “odd”.
*/

function isEven(digit) {
  return digit % 2 == 0 ? "Even" : "Odd";
}
console.log(isEven(0)); // Even
console.log(isEven(4)); // Even
console.log(isEven(5)); // Odd
// --------------------------------------------

/*
Write a script to filter an array of numbers to get only those > 10.
*/

let numbers = [1, 2, 3, 12, 23, 34, 45, -12, 0, 10, 11];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) console.log(numbers[i]);
}
