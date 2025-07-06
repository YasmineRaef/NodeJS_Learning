//Write a script to create and read a text file using fs module.
const fileSystem = require("fs");

// fileSystem.writeFile("message.txt", "Hello World!", (error) => {
//   if (error) throw error;
//   console.log("File has been saved");
// });

fileSystem.readFile("message.txt", "utf8", (error, data) => {
  if (error) throw error;
  console.log("File content: ", data);
});
