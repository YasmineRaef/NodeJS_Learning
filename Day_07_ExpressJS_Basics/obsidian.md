## ExpressJS Basics

--> Express is a fast and minimal web framework for Node.JS. It provides a set of features suitable for building web applications. With Express, you can: - Build Web applications including single-page & multi-page applications. - Build an API server.

#### Creating Express Hello World App:

1. First: Make sure you installed express in your folder:

```js
//in your terminal of your directory:
npm install express

//in the folders that were installed with exress, you'll find one named package.json, set the type to module, to force Node.JS to use ES modules:
{
	"type" : "module",
}
```

> [!NOTE] Bonus Tip
> For every time we edit our code --let's say our main file is called index.js-- we have to restart the server. So, instead, write the following code in your package.json to listen to any changes and auto refreshing without restarting the server everytime.

```js
//In your package.json in scripts type the following:
"scripts" : {
	"start" : "node --watch index.js"
},
//The --watch flag will restart the server whenever you change the source code. Just make sure to change the (index.js) for whatever main file you have.
//If you don’t add the `--watch` flag, you must restart the server whenever you change the code.

```

2.  Second: Let's create our main file named `index.js`:

```js
//import the `express` function from the `express` library
//In Common JS, we used to type [const express = require('express');] but now, we use the ES module for importing
import express from 'express';

//Next, call the `express()` function to get an instance of the `Express` app
const app = express();

//define a `PORT` constant that stores the port number for the server to listen on
const PORT = 3000;

//define a route handler that handles the HTTP GET request to the site route
app.get('/', (req, res) => {
	res.send('Hello, World! Yasmine talking 😎✌️.');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port http://localhost:${PORT}/`);
});

//Now, run the following in your terminal
> npm start

// the server is running and listening on the port 3000. If you launch the page `http://localhost:3000/` on the web browser, you’ll see the `Hello, World! Yasmine talking 😎✌️.` message on the screen.
//Out: Server is listening on port http://localhost:3000/
//CTRL+C to exit

```

> [!NOTE] The functions `.listen()` and `.get()`
>
> 1.  `.get()` :
>
> - First parameter is the **_route_** (i.e. `'/'`)
> - Second parameter is _call back function_ with two parameters: `req ==> request` & `res ==> response` , this function is also known as **_Router Handler_**.
>
> 2. `.listen()` :
>
> - To instruct the app to listen to requests on the port `3000`

##### What if we wanted to return a JSON to the Client from the Express app, instead of the message popping up dirextly?

- You will do the same steps as before, but instead of our `res.send("Hello World");` we will change it to `res.send({message : 'Hellow World!' });` let's see the whole code again:

```js
import express from "express";

const app = express();

const PORT = 3000;

//instead of the last, we added the format of JSON file
app.get("/", (req, res) => {
  res.send({ message: "Hello, World! Yasmine talking 😎✌️." });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}/`);
});

//Out on our port:
//{"message":"Hello, World! Yasmine talking 😎✌️."}
```
