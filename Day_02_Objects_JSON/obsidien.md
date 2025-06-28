## 1. Variables:

1. `var` : variable can be updated and redeclared
2. `let` : block-scoped, can't be accessible out the particular block, and let can be updated but not redeclared
3. `const`: block scope, neither be updated nor redeclared.

### Sample Test:

```js
var a = "Hello World";
var b = 10;
console.log(a); //Out: Hello World
console.log(b); //Out: 10
// Using let
{
  let num = 20;
  // Calling the function inside block
  console.log(num); //Out: 20
}

// Calling the function outside
// block throws a Error
console.log(num); //Out: ERROR!

// Using const
const x = 22;
{
  const x = 90;
  console.log(x); //Out: 90
  {
    const x = 45;
    console.log(x); //Out: 45
  }
}
console.log(x); //Out: 22
```

---

## 2. Data Types:

    1. Numbers: Integers and Floats
    2. String: enclosed in single/ double quotes
    3. Boolean: True/ False
    4. Null: does not exist
    5. Undefined: variable not assigned to a value
    6. Symbol: It is a built-in object whose constructor returns a symbol that is unique.
    7. bigint: whole numbers larger than (2^53)-1.

### Sample Test:

```js
// Decimal Numbers
console.log(323); //Out: 323

// Binary Numbers
console.log(0b11); //Out: 3

// String
const str1 = "Yasmine Mohamed";
console.log(str1); //Out: Yasmine Mohamed

// Boolean
let student = true;
console.log(student); //Out: true

// null
let val = null;
console.log(val); //Out: null

// undefined
let undefinedValue;
console.log(undefinedValue); //Out: undefined

// symbol
let id = Symbol("id");
console.log(id); //Out: Symbol(id)

// Bigint
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); //Out: 123456789012345678901234567890n

// Object
let person = {
  name: "raef",
  age: 54,
};
console.log(person.name); //Out: raef
```

---

## 3. Conditions:

- ==If -Else If- Else Block:==

```js
const num = 0;
if (num > 0) {
  console.log("Given number is positive.");
} else if (num < 0) {
  console.log("Given number is negative.");
} else {
  console.log("Given number is zero."); //Output
}
```

- ==Switch Block:==

```js
const day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("Back to the grind!");
    break;
  case "Wednesday":
    console.log("Midweek hustle—you're halfway there!"); //Output
    break;
  case "Friday":
    console.log("Weekend is knocking! Time to celebrate.");
    break;
  default:
    console.log("Just another day in paradise.");
}
```

---

## 4. Loops:

- ==For Loop:==

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
} //Out: 0 1 2 3 4
```

- ==While Loop:==

```js
let i = 1;
while (i <= 5) {
  console.log("Counting with while:", i);
  i++;
} //Out: 1 2 3 4 5
```

- ==Do - While:==

```js
let j = 6;
do {
  console.log("Counting with do...while:", j);
  j++;
} while (j <= 5);
//Out: Counting with do...while: 6
```

---

## 5. Functions:

### Sample Test:

```js
function func_name(arg) {
    ...code
}

function calcAddition(number1, number2) {
    return number1 + number2;
}
console.log(calcAddition(6, 9)); //Out: 15
```

---

## 6. Operaters:

```js
// Addition
let a = 5 + 3;
console.log(a); //Out: 8

// Subtraction
let b = 10 - 4;
console.log(b); //Out: 6

// Addition Assignment
let y = 5;
y += 3;
console.log(y); //Out: 8

// Subtraction Assignment
let z = 15;
z -= 6;
console.log(z); //Out: 9

// TypeOf Operator
let x = 42;
console.log(typeof x); //Out: number
```

---

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
