//Create a script that logs “Hello, Node.js!” and uses setTimeout, setInterval .

console.log("Hello, Node.js! loading...");

setTimeout(() => {
  console.log(
    "I have set up your workspace, please check the files in the directory."
  );
  clearInterval(intervalSpan);
  console.log("You can now start coding in Node.js!");
}, 8000);

const intervalSpan = setInterval(() => {
  console.log("⏳ Still running...please press CTRL+C to exit.");
}, 2000);
