/*Create an object for a “user” (name, email, age), destructure it, 
and convert to/from JSON.*/

const user = {
  name: "Yasmine",
  email: "yasmine@example.com",
  age: 21,
};

//Destructuring the object
let { name, email, age } = user;

//Using the destructured variables in creating text in JS having JSON syntax
let text =
  '{ "name": "' + name + '", "email": "' + email + '", "age": ' + age + " }";

//Parsing the JSON string back into an object
let obj = JSON.parse(text);
console.log(obj);
