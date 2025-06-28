## 7. Objects:

##### - Object Literals: list property inside curly brackets {}

    Also known as --> OBJECT INITIALIZERS

```js
{firstName: "Yasmine", lastName: "Mohamed", age: 21, eyeColor: "Brown", ethnicity: "White"}

const person = {};
//same initializing, but for readability, use literals
const person = new Object();

//Adding Properties of object person
person.firstName = "John";
person.lastName = "Whick";
person.age = 56;
person.eyeColor = "Blue";
```

##### - Object Constructor Functions:

```js
function Person(first, age, eye) {
  this.firstName = first;
  this.lastName = "Rally";
  this.age = age;
  this.eyeColor = eye;
}
//Take care: lastName is given a default value i.e. "Rally"
//Now, we can create several Person Objects as following
const myFather = new Person("John", 50, "blue");
const myBrother = new Person("Sally", 48, "green");
const mySister = new Person("Anna", 18, "green");
const mySelf = new Person("Johnny", 22, "green");
```

---

## 8. Destructuring in JS:

#### Definition: Destructuring is to _UNPACK_ any arrays or objects properties into standalone accessible variables.

### ==For Objects:==

    Notes:
    	- Destructuring is not destructive
    	- Destructuring doesn't change the original object
    	- Destructuring can be used with any iterables

```js
//Our object
const person = { firstName: "Yasmine", lastName: "Mohamed", age: 21 };
//To access firstName and lastName witout destructuring
console.log(person.firstName, person.lastName); //Out: Yasmine Mohamed

//Destructuring this object to freely access the variables without referring to the parent object
let { firstName, lastName } = person;
console.log(firstName, lastName); //Out: Yasmine Mohamed
```

#### Object Default Values:

```js
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
// Destructuring
let { firstName, lastName, country = "US" } = person;
//In this example, the destructuring checks if there is a property in person object named 'country', if not found i.e. UNDEFINED, country will be assigned the default value "US"
```

#### Object Property Alias:

```js
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// Destructuring
let { lastName: name } = person;
//Here, when you 'UNPACKED' the value in person.lastName, you assigned it to a new variable called name i.e. name = "Doe"
console.log(lastName); //Out: ERROR
console.log(name); //Out: Doe
```

### ==For Strings:==

```js
//Creating String
let name = "YasmineRaefMohamed";
//Destructuring
let [a, b, c, d, e] = name;
console.log(a, b, c, d, e); //Out: Y a s m i
```

### ==For Arrays:==

```js
//Create an Array
const hobbies = ["Reading", "VolleyBall", "Sky_Diving", "Bunjee_Jumping"];
//Destructuring
let [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); //Out: Reading VolleyBall

//To skip array values we can use commas
let [, , hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); //Out: Sky_Diving Bunjee_Jumping

//To pick up values from a specific known index in an array
let { [0]: hobby1, [2]: hobby2 } = hobbies; //Beware of the syntax {[i]: variable}
console.log(hobby1, hobby2); //Out: Reading Sky_Diving

//If you have an array, and wish to destructure all values, use rest keyword
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a, b, ...rest] = numbers; //Another keyword is ...leftover
console.log(a); //Out: 10
console.log(b); //Out: 20
console.log(rest); //Out: [30, 40, 50, 60, 70]
```

### ==For Maps:==

```js
const students = new Map([
  ["Freshmen", 600],
  ["Juniors", 500],
  ["Sophomores", 300],
  ["Seniors", 200],
]);
let text = "";
for (const [key, value] of students) {
  text += key + " students count is " + value;
  text += "\n";
}
console.log(text);
/*
Out:
	Freshmen students count is 600
	Juniors students count is 500
	Sophomores students count is 300
	Seniors students count is 200
*/
```

---

## 9. Javascript JSON

- JSON is a format for storing and transporting data.
- It's often used when data is sent from a server to a web page.
- lightweight data interchange format
- language independent

> [!NOTE]
>
> - The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

### JSON syntax:

```json
{
  "employees": [
    { "firstName": "Yasmine", "lastName": "Mohamed" },
    { "firstName": "Chris", "lastName": "Hamesworth" },
    { "firstName": "Magdi", "lastName": "Yakoub" }
  ]
}
```

- Because JSON format is syntactically identical to the code for creating JavaScript objects, a JavaScript program can easily convert JSON data into native JavaScript objects.

#### --> Important rules in JSON syntax:

1. Data is in name / value pairs
2. Data is separated by commas
3. Curly braces hold objects
4. Square brackets hold arrays

## Converting JSON Text to JS Object:

    - common use for JSON is reading data from web server and displaying it in web page
    - For simplicity, this can be demonstrated using STRING as input

```js
//First create JS string containing JSON syntax
let text =
  '{ "employees" : [' +
  '{"firstName": "Yasmine", "lastName": "Mohamed"}, ' +
  '{"firstName": "Chris", "lastName": "Hamesworth"}, ' +
  '{"firstName": "Magdi", "lastName": "Yakoub"} ' +
  " ]}";

//Now we use the JS built-in function JSON.parse() to convert string to JS object
const obj = JSON.parse(text);

//Finally, use the new JS object in your page...
```

---

## 10. Asynchronous Operations

## JS provides three main ways to manage asynchronous tasks:

### 1. Callbacks:

    - THE TRADITIONAL APPROACH USING FUNCTIONS PASSED AS ARGUMENTS
    - CAN LEAD TO SEVERAL CALLBACKS WITH NESTED FUNCTIONS, MAKING CODE HARD TO READ
    - REQUIRES MANUAL CHECKS AND CAN BE A HEADACHE IN NESTED CALLBACKS
    - CONTROL FLOW IS SEQUENTIAL
    - USAGE: SOMETIMES YOU DON'T WANT TO DO SOMETHING RIGHT AWAY, YOU WANT TO WAIT UNTIL ANOTHER TASK IS DONE. THAT'S WHAT CALLBACKS ARE FOR.

> [!NOTE] Real-Life Analogy: Ordering Pizza
> Imagine you call a pizza place and say: "Deliver the pizza, and when it arrives, call me."
> That "call me" part is the CALLBACK -- you're telling them what to do after the pizza is delivered.

```js
//This is the callback function i.e. once finished, do this
function notifyDelivery() {
  console.log("Pizza has been delivered! 🍕");
}

//This function takes a callback
function orderPizza(callback) {
  console.log("Ordering pizza...");
  //Simulate a delay (waiting for delivery)
  setTimeout(() => {
    console.log("Pizza is here!");
    callback(); //Call the callback function
  }, 2000); // 2 seconds delay
}

//Call the function and pass the callback
orderPizza(notifyDelivery);
/*
	out:
	Ordering pizza... (then 2 sec delay)
	Pizza is here!
	Pizza has been delivered! 🍕
*/
```

#### What is happening behind the scene?

1. `orderPizza(notifyDelivery)` is called.
2. It logs "Ordering pizza..." to the screen
3. After 2 seconds, it logs "Pizza is here!"
4. Then it calls `notifyDelivery()`, which logs "Pizza has been delivered! 🍕"

---

### 2. Promises:

##### --> A promise is like a placeholder for a value that you'll get in the future.

    - A BETTER ALTERNATIVE THAT IMPROVES READABILITY AND AVOIDS CALLBACK NESTING
    - OBJECTS REPRESENTING EVENTUAL COMPLETION OR FAILURE OF AN ASYNC OPERATION
    - ALLOWS CHAINING WITH .then() AND .catch(), IMPROVING READABILITY
    - ERRORS ARE HANDLED USING .catch()
    - CONTROL FLOW IS CHAINING

> [!NOTE] Real-Life Analogy: Buying Ice Cream
> Imagine you ask your friend:
> "Can you get me ice cream? If you did, I'll feel happy. If not, I'll be sad."
> That's exactly what a PROMISE does --it either fulfills (happy) or rejects (sad)

```js
//A function that returns a Promise
function getIceCream() {
  return new Promise((resolve, reject) => {
    const hasIceCream = true;
    if (hasIceCream) {
      resolve("Here's your ice cream! 🍦");
    } else {
      reject("Sorry, no ice cream today. 🥲");
    }
  });
}

//Using the promise
getIceCream()
  .then((message) => {
    console.log("Success: ", message);
  })
  .catch((error) => {
    console.log("Failure: ", error);
  });

//Out: Success:  Here's your ice cream! 🍦
```

#### What is happening behind the scene?

1. `getIceCream()` returns a Promise.
2. Inside the Promise:
   - If hasIceCream is _true_, it calls `resolve(...)` -> Success!
   - If _false_, it calls `reject(...)` -> failure
3. `.then(...)` handles success case.
4. `.catch(...)` handles the failure case.

---

### 3. Async/ Await:

##### --> `Async` makes a function return a _PROMISE_, `Await` pauses the execution of the `Async` function, until the Promise is resolved or rejected. (i.e. It's like saying: "Wait here until I get the result, then continue.")

    - A MODERN AND CLEANER SYNTAX THAT MAKES ASYNCHRONOUS CODE LOOK SYNCHRONOUS
    - SYNTACTIC SUGER OVER PROMISES, USING async FUNCTIONS AND await EXPRESSIONS
    - UTILIZES try...catch BLOCKS, SIMPLIFYING ERROR HANDLING.
    - CONTROL FLOW IS ASYNCHRONOUS IN A SYNCHRONOUS MANNER.

> [!NOTE] Real-Life Analogy: Waiting for Donuts
> Imagine you ask a friend to bring you donuts. You wait patiently until they arrive, then you eat. That's exactly what await does --it waits for the Promise to finish before moving on.

```js
//A function that returns a promise
function getDonut() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Here's your donut! 🍩");
    }, 2000);
  });
}

//An async function that waits for the donut
async function eatDonut() {
  console.log("Waiting for the donut...");
  const donut = await getDonut(); //Waits here until the promise resolves
  console.log(donut);
  console.log("Yum! Donut eaten.");
}

//Start the process
eatDonut();

/*
	Out:
	Waiting for the donut... (delayed 2 sec first)
	Here's your donut! 🍩
	Yum! Donut eaten.
*/
```

#### What is happening behind the scene?

1. `eatDonut()` is called
2. It logs: "Waiting for the donut..."
3. It calls `getDonut()` and waits 2 seconds
4. After 2 seconds, `getDonut()` resolves with "Here's your donut! 🍩".
5. That value is then stored in the _donut_ variable

### Similarity between the three:

- All these three are designed to handle the results of _asynchronous_ operations.
- They all handle errors in their own way, **Callbacks** use the error first convention, Promises use the .catch() method, and Async/Await uses try and catch block.
- Callbacks, Promises, and Async/Await they all operate on the JavaScript event loop.

---

## 11. Exception Handling in JS

The process of dealing with errors (exceptions) that occur during the execution of a program. JS provides some mechanisms to catch, handle and recover from error instead of letting the error stop the program. The most common approach is try...catch blocks.

#### --> Try-Catch blocks:

    - TRY BLOCK: PLACE CODE THAT MAY POTENTIALLY THROW AN ERROR HERE
    - CATCH BLOCK: THIS BLOC EXECUTES IF AN ERROR OCCURS IN THE TRY BLOCK
    - FINALLY BLOCK: CODE INSIDE THIS BLOCK WILL ALWAYS RUN, WHETHER AN ERROR OCCURED OR NOT.

```js
try {
  let result = 10 / 0; // Undefined
  if (!isFinite(result)) {
    throw new Error("Cannot divide by zero!"); //Specific error
  }
  console.log(result);
} catch (error) {
  console.error("Error occured: ", error.message); //Only if error
} finally {
  console.log("Execution completed"); //Always executes
}
/*
	Out:
	Error occured:  Cannot divide by zero!
	Execution completed
*/
```

#### --> Throwing Custom Errors:

- Sometimes the standard JS errors are not sufficient for our application needs. That's where we turn to Custom Errors.

```js
function check(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  console.log("Access granted");
}
try {
  check(16);
} catch (error) {
  console.error(error.message); //Out: Age must be 18 or above
}
```

#### --> Advanced try...catch with Async/Await

```js
async function fetchData() {
  try {
    let result = await fetch("https://api.example.com/data");
    let data = await result.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data: ", error.message);
  }
}
fetchData(); //Out: Error fetching data:  fetch failed
```

_Explaining this code:_

1. `fetchData()` is an _async_ function, so it can use _await_
2. It tries to:
   - Fetch data from "https://api.example.com/data" using `fetch()`
   - Convert the response to JSON using `.json()`
   - Log the result
3. If anything goes wrong, it catches the error and logs: "Error fetching data: <error_message>"

---

## 12. Export / Import

###### Why do we need to use export and import in JS ??

1. Modularity:
   - You can split your code into multiple files (modules), each focused on a specific task.
   - This makes your code easier to read, debug and maintain.
2. Reusability:
   - You can reuse functions, variables, or classes across different files without rewriting them.
3. Avoid Global Scope:
   - Without modules, everything lives in the global scope, which can lead to naming conflicts and bugs.
   - Modules keep variables and functions scoped to their own file unless explicity exported.

```js
// -------------------- In modules.js file -------------------
export function add(a, b) {
  // you can just type export before
  return a + b;
}
// or you can explicitly export everything in the end of the file
export const PI = 3.14159;

//---------------------In utils.js file -----------------------
import { add, PI } from "./modules.js";

console.log(add(2, 4)); //Out: 6
console.log(PI); //Out: 3.14159
```

##### --> Types of Export:

| Type           | Syntax               | Example                           |
| -------------- | -------------------- | --------------------------------- |
| Named Export   | export { _sth_ }     | export function greet () {}       |
| Import Named   | import { _sth_ }     | import { _sth_ } from './file.js' |
| Default Export | export default _sth_ | export default function () {}     |
| Import Default | import _sth_         | import _sth_ from './file.js'     |

---
