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

---
