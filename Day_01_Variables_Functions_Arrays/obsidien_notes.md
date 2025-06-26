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
