## NodeJS EventEmitter

> [!NOTE] Definition
> The EventEmitter class in NodeJS is a core module that provides a way to handle asynchronous events. It allows objects to emit events and other objects to listen and respond to those events.

##### Real Life Analogy:

Think of EventEmitter like a party planner: - You (the planner) can announce events (like "cake is ready") - Guests (listeners) can react when those events happen (like "Yay! Let's eat!")
In Node.JS, EventEmitter lets you: - Emit (trigger) custom events - Listen for those events and run code when they happen

--> Let's see a quick example for this:

```js
//Importing events
const EventEmitter = require("events");

//Initializing event emitter instance
let myEmitter = new EventEmitter();

//Registering to 'greet'
myEmitter.on("greet", (name) => {
  console.log("Hello, ${name}!");
});

//Triggering 'greet'
myEmitter.emit("greet", "Yasmine"); //Out: Hello, Yasmine!
```

- `EventEmitter` : A class that let's you create and handle events
- `.on(event, data)` : Listens for an event and runs the callback
- `.emit(event, data)` : Triggers the event and sends data to the listener.

---

###### Remove Listener:

> [!NOTE] Definition
> The *eventEmitter.removeListener()* takes two argument event and listener, and removes that listener from the listeners array that is subscribed to that event.
> While *eventEmitter.removeAllListeners()* removes all the listener from the array which are subscribed to the mentioned event.

##### Real Life Analogy:

Imagine you are hosting a party: - You invite two friends to listen for the "Cake is ready" announcement - Later, you tell one friend to stop listening `removeListener` - Or, you cancel the whole party and tell everyone to go home `removeAllListeners`

--> Try-out example:

```js
// Import the built-in 'events' module from Node.js
const EventEmitter = require("events");

// Create a new EventEmitter instance
const eventEmitter = new EventEmitter();

// Define two listener functions that will respond to the 'greet' event
const greet1 = (msg) => console.log("👩‍💻 Listener 1 says:", msg);
const greet2 = (msg) => console.log("🧑‍💻 Listener 2 says:", msg);

// Register greet1 twice for the 'greet' event
eventEmitter.on("greet", greet1); // First registration of greet1
eventEmitter.on("greet", greet1); // Second registration of greet1

// Register greet2 once for the 'greet' event
eventEmitter.on("greet", greet2);

// At this point, the 'greet' event has 3 listeners:
// - greet1 (twice)
// - greet2 (once)

// Remove ONE instance of greet1 from the 'greet' event
eventEmitter.removeListener("greet", greet1);

// Now the 'greet' event has 2 listeners:
// - greet1 (once)
// - greet2 (once)

// Emit (trigger) the 'greet' event with a message
console.log("🔔 Emitting 'greet'...");
eventEmitter.emit("greet", "Hello, Yasmine!");

// Output will be:
// 👩‍💻 Listener 1 says: Hello, Yasmine!
// 🧑‍💻 Listener 2 says: Hello, Yasmine!

// Remove ALL listeners for the 'greet' event
eventEmitter.removeAllListeners("greet");

// Now the 'greet' event has 0 listeners

// Emit the 'greet' event again
console.log("🔕 Emitting 'greet' after removing all listeners...");
eventEmitter.emit("greet", "This will not be heard.");

// No output will appear because there are no listeners left

//Even though `greet1` was added twice, `removeListener()` only removes one instance. You’d need to call it again to remove both.
```

--> To summarize: - `eventEmitter.on(event, listener)` adds a listener - You can add the same listener multiple times - `removeListener(event, listener)` removes one instance of that listener - `removeAllListeners(event)` removes all listeners for that event - `emit(event, data)` triggers the event and sends data to all listeners

---

## HTTP Module:

--> Creating an HTTP server example:

```js
//Import the HTTP module
const http = require("http");

//Create a server object
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-type": "text/plain" });
  //Send the response body as 'Hello, World!'
  res.end("Hello, World!");
});

//Define the port to listen on const PORT = 3000
const PORT = 3000;

//Start the server and listen on the specified port
server.listen(PORT, "localhost", () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
```

### Understanding the Code:

1. `http.createServer()` - Creates a new HTTP server instance
2. The callback function is executed for each request with two parameters:
   - `req` - The request object (http.IncomingMessage)
   - `res` - The response object (http.ServerResponse)
3. `res.writeHead()` - Sets the response status code and headers
4. `res.end()` - Sends the response and ends the connection
5. `server.listen()` - Starts the server on the specified port

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

##### Why do we have such a module called `fs` ?

--> Filesystem operations, such as reading or writing files, are typically slow operations that can block the execution of other tasks. In traditional synchronous programming, the execution of the program would pause until the filesystem operation is completed. However, in Node.js, we can leverage its asynchronous nature to perform these operations without blocking the execution of other tasks.

### Using async/await for Asynchrounous Filesystem Operations:

--> Async/await is a feature introduced that allows us to write asynchronous code in a synchronous-like manner. It provides a more readable and concise syntax for handling promises, which are commonly used in asynchronous programming in JavaScript.

==Example for more explanation:==

```js
const fs = require("fs");

// To use async/await for filesystem operations in Node.js, we need to wrap the asynchronous functions in a try-catch block and use the ‘await’ keyword to wait for the result of the asynchronous operation.
async function readFile(path) {
  try {
    const data = await fs.promises.readFile(path, "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file, cause: ", error.message);
  }
}
//Call the function for testing
readFile("example.txt");

//Bonus: If you want to see all the files in your directly simply type the following code:
fs.readdir(".", (err, files) => {
  if (err) return console.error("Error reading directory:", err);
  console.log("Files in current directory:", files);
});
/*
Out:
	Files in current directory: [
	  'dir_scan.cjs',
	  'events.cjs',
	  'obsidien.md',
	  'server.cjs',
	  'testing.txt'
	]
*/
```

### Benefits of using async/await:

1. Improved Readability
2. Error Handling
3. Concise syntax

---
