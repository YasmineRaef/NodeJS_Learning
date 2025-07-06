## REPL in NodeJS:

> [!Note] REPL Definition:
> REPL stands for Read Evaluate Print Loop, and is a programming languag environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convienient way to quickly test simple JavaScript code.

```js
//Try first the following code to make sure that node and npm are installed
> node -v
> The current version on your system
> npm -v
> The current version on your system

//Start a session first by typing node and enter
> node
--> this will open a place you could try testing some code in

//In your terminal type the code and press enter
> console.log('Hello World of JS!')
 Hello World of JS!
 undefined
> 5 === '5'
 false
 >

//In some cases you want to test something tha needs multiple lines as functions, to do that, write the first line and enter
> function generateRandom() { //then press enter

//The Node REPL is smart enough to determine that you are not done writing your code yet, and it will go into a multi-line mode for you to type in more code. Now finish your function definition and press enter:
> function generateRandom() {
> ...return Math.random()
> }
undefined

```

---

##### How to delay and repeat actions in JS:

1. `setInterval`: In every predetermined part of time, do the following recursively.
2. `setTimeout`: after a specific time lapse, do the following.

--> They may seem the same, but let's try them out to see the clear difference between them:

```js
//Let's log Hello World first as a starting point
console.log("Hello World!"); //Out: Hello World!

//Now, let's try the setTimeout first:
setTimeout(() => {
  console.log("Scripts loaded! Let' start coding!");
}, 5000);
/* Out: 
	Hello World! (a delay of 5 seconds will happen here)
	Scripts loaded! et's start coding!
*/
//When the user runs that setTimeout, nothing will happen until 5 seconds pass, which may make the user think the program crashed, and here comes the importance of setInterval
setInterval(() => {
  console.log("Loading... press CTRL+C to exit.");
}, 2000);
/*Out:
	Hello World! (After 2 sec)
	Loading... press CTRL+C to exit. (After 2 sec)
	Loading... press CTRL+C to exit. (After 1 sec, i.e. 5 seconds)
	Scripts loaded! Let's start coding! (After 1 sec, i.e. 6 seconds)
	Loading... press CTRL+C to exit. (After 2 seconds)
	Loading... press CTRL+C to exit.
	... and son on as an infinity loop
*/
//What happens, is every 2 seconds the msg 'Loading... press CTRL+C to exit.' is printed, so it will continue like that even after the timeout was loaded, unless the user presses CTRL+C

//To solve this, we need to give a specific time for the whole program, let's say 8 seconds, when the 8 seconds finish, the program should stop automatically if the user didn't interrupt in the middle
//---------The whole code--------------
console.log("Hello, Node.js! loading...");

const intervalSpan = setInterval(() => {
  console.log("⏳ Still running...please press CTRL+C to exit.");
}, 2000);

setTimeout(() => {
  console.log(
    "I have set up your workspace, please check the files in the directory."
  );
  clearInterval(intervalSpan);
  console.log("You can now start coding in Node.js!");
}, 8000);
/*Out:
	Hello, Node.js! loading...
	⏳ Still running...please press CTRL+C to stop the process after you finish.
	⏳ Still running...please press CTRL+C to stop the process after you finish.
	⏳ Still running...please press CTRL+C to stop the process after you finish.
	I have set up your workspace, please check the files in the directory.
	You can now start coding in Node.js!
*/
```

---

## Node.JS Architecture Diagram:

--> Think of node.js as a super-efficient receptionist at a busy office. Here's how it works:

> [!Note] How Node.JS Handles Requests
>
> 1. **A client Makes a request**:
>    - Someone (a client) rings the bell at the front desk
>    - The receptionist (Node.js) adds their request to a waiting line (called the _Event Queue_)
> 2. **The event loop checks the line:**
>    - The receptionist keeps checking the line over and over (this process is known as _Event loop_)
>    - If someone is waiting, they help them right away --or decide who should handle it.
> 3. **Handling the request:**
>    - If the task is _quick_ (like checking a calender), the receptionist does it immediately.
>    - If it was a _long_ task (like printing a 100-page report), the receptionist passes it to a helper in the back office (called the _Thread Pool_), so they can keep helping others at the same time.
> 4. **Sending the Response:**
>    - When the helper finishes the long task, they'll tell the receptionist.
>    - The receptionist then gives the client their answer (this is the _Callback Queue_ being processed).

```js
//Code for further understanding:
console.log("Request received");

setTimeout(() => {
  console.log("Long task done (like printing report)");
}, 2000);

console.log("Quick task done (like checking calendar)");
/*
Out:
	Request recieved
	Quick task done (like checking calender) (after 2 sec)
	Long task done (like printing report)
*/
```

#### Now, let's think of these two scenarios:

1. Think of a waiter working in a restaurant. He goes around the restaurant taking orders from customers and serving them when their respective food is ready.
2. The waiter takes an order from a customer and waits until the food is prepared, serves it and then proceeds to the next customer. This way the waiting time for each customer increases and the restaurant would be a huge flop.
   --> The latter represents synchronous programming and the earlier one represents asynchoronous programming.

---

## Non-Blocking:

> [!Note] Definition
> The non-blocking nature of Node.JS means that it does not pause the execution of a program while waiting for time-consuming operations-like file access, database queries, or HTTP requests-to complete. Instead, Node.JS delegates these tasks to the system (via background threads or the event loop), allowing the main thread to continue running other code. Once the operation finishes, a callback or promise is triggered to handle the result. This approach ensures that slow operations do not block the execution of the rest of the program, making Node.JS highly effiecient and scalable for I/O-heavy applications.

--> Have a look at the below code for further understanding of Non-blocking nature of Node.JS:

```js
console.log("First one to start");

setTimeout(() => {
  console.log("I should wait for 3 seconds before execution");
}, 3000);

setTimeout(() => {
  console.log("I should wait for 0 seconds before execution");
}, 0);

console.log("It's time for me to end..");
/*
Out:
	First one to start
	It's time for me to end..
	I should wait for 0 seconds before execution
	I should wait for 3 seconds before execution
*/
```

#### How did this code work? And why was _It's time for me to end_ executed before _I should wait for 0 seconds_ ?

- Step 1:
  The main function is pushed to the call stack
- Step 2:
  The first `console.log` statement is pushed to the call stack
- Step 3:
  _First one to start_ is printed and the console.log function is removed from the call stack.
- Step 4:
  The `setTimeout(3000)` is given to the browser for processing
- Step 5:
  The `setTimeout(0)` function is given to the browser for processing
- Step 6:
  The `setTimeout(0)` function has been processed and given to the CallBack Queue
- Step 7:
  The last console.log statement (i.e. _It's time for me to end._ ) is pushed to the call stack.
- Step 8:
  _It's time for me to end_ is printed and the console.log function is removed from the call stack.
- Step 9:
  The main function is removed from the call stack and the event loop starts running.
- Step 10:
  The console.log function present in `setTimeout(0)` is pushed to the call stack
- Step 11:
  _I should wait for 0 seconds before execution_ is printed and the console.log function is removed from the call stack.
- Step 12:
  After waiting for 3 seconds, the browser gives the `setTimeout(3000)` function to the CallBack queue
- Step 13:
  The console.log function present in `setTimeout(3000)` is pushed to the call stack
- Step 14:
  _I should wait for 3 seconds before execution_ is printed and the console.log function is removed from the call stack

---

## Node.JS Modules

--> Modules are the building blocks of Node.JS applications, allowing to to organize code into logical, reusable components, they help in:

- Organizing code into manageable files
- Encapsulating functionality
- Preventing global namespace pollution
- Improving code maintainability and reusability

> [!NOTE] Types of modules
> Node.JS supports two module systems:
> a) CommonJS (traditional)
> b) ES Modules (ECMAScript modules)

## Core Built-in Modules:

Node.JS provides several built-in modules that are compiled into the binary language, including: - `fs` : File system operations - `http` : HTTP server and client - `path` : File path utilities - `os` : Operating system utilities - `events` : Event handling - `util` : Utility functions - `stream` : Stream handling - `crypto` : Cryptographic functions - `url` : URL parsing - `querystring` : URL query string handling

#### To use any built-in module, use the `require()` function:

--> Example:

```js
//Using Multiple built-in modules
const http = require("http");

//Now you can use the module's features, like creating a server
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);

//Bonus tip: If this code didn't work for you because you already had the Express downloaded, then change your file name from your_file_name.js into your_file_name.cjs
//A .cjs file is a CommonJS module file used in Node.js. It allows you to use require() and module.exports to import and export code between files.
```

---

## Creating and exporting modules:

--> Exporting items:

```js
//To export a single item (function, object, etc.), assign it to module.exports
//-----------------mathTools.js--------------------
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

//Exporting functions
module.exports = {
  add,
  multiply,
};
//Another way for exporting:
exports.add = add;
exports.multiply = multiply;
```

--> Using Your Modules:

```js
//Import and use your custom modules using require() with a relative or absolute path
//-----------------------app.js--------------------
//Importing functions
const math = require("./mathTools");

console.log("2 + 3 = ", math.add(2, 3)); //5
console.log("4 x 5 = ", math.multiply(4, 5)); //20
```

---

### Bonus: Greeting Module:

--> Let's build a simple custom module to create a greeting generator that returns a personalized message based on the time of day:

```js
//-------------- greeter.js --------------------
function getGreeting(name) {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning, ${name} ! ☀️";
  } else if (hour < 18) {
    return "Good afternoon, ${name}! 🌤️";
  } else {
    return "Good evening, ${name}! 🌙";
  }
}
module.exports = getGreeting;

//---------------- app.js --------------------------
const greet = require("./greeter");
const name = "Yasmine Raef";
const message = greet(name);

console.log(message);
//Out: Good afternoon, Yasmine Raef! 🌤️
```

---

## File system module `fs`:

--> A built-in module that let's you interact with files and directories on your computer, it allows you to:

1.  Read files
2.  Write or append to files
3.  Delete files
4.  Create or remove directories
5.  Check if a file exists
6.  Get file stats (size, modified data, etc.)

`fs` supports both: - Asynchronous methods (non-blocking, preferred) - Synchronous methods (blocking, for small scripts)

###### Creating a file:

```js
const fs = require("fs");

fs.writeFile("message.txt", "Hello, Yasmine!", (error) => {
  if (error) throw error;
  console.log("File has been saved!");
});
```

###### Reading the file you just created:

```js
const fs = require("fs");

fs.readFile("message.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log("File content: ", data);
});
```

---
