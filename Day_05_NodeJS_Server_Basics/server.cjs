//Build a server that responds with “Hello, World!” at localhost:3000.
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
