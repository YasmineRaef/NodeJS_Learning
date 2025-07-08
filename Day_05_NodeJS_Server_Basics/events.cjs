//Create a custom event emitter for a “user signup” event that logs user details.

const EventEmitter = require("events");
let myEmitter = new EventEmitter();

let time = new Date().toLocaleString();

function logUserDetails(user) {
  console.log("📝 New user signed up!");
  console.log(`👤 Name: ${user.name}`);
  console.log(`📧 Email: ${user.email}`);
  console.log(`📆 Joined: ${time}`);
}

myEmitter.on("userSignUp", logUserDetails);

const newUser = {
  name: "Yasmine",
  email: "Yasmine@example.com",
};

myEmitter.emit("userSignUp", newUser);

/*
  Out:
  📝 New user signed up!
  👤 Name: Yasmine
  📧 Email: Yasmine@example.com
  📆 Joined: 7/6/2025, 8:09:05 PM
*/
