// logger.js
const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

// Create a custom Logger class that inherits EventEmitter
//This means Logger can emit and listen for events like log
class Logger extends EventEmitter {
  constructor(logFilePath) {
    super(); //calls the parent class constructor eventEmitter so we can use .emit() and .on()
    this.logFilePath = logFilePath;

    // Listen for 'log' events and handle them
    this.on("log", (event) => {
      //To get the current date and time in ISO format (e.g. 2025-07-08T23:59:01.123Z)
      const timestamp = new Date().toISOString();
      //For formatting the log message
      const logMessage = `${timestamp} - ${event.level}: ${event.message}\n`;

      // Appending the log message to the file
      //appendFileSync is synchronous, so it blocks until the write is complete
      fs.appendFileSync(this.logFilePath, logMessage);

      // Also prints the log message to the console for real-time visibility.
      console.log(logMessage.trim());
    });
  }

  //These are public methods you can call from other files.
  //They emit a 'log' event with a level and message
  //The listener inside the constructor handles writing to file and console.

  // Emits an INFO level log
  info(message) {
    this.emit("log", { level: "INFO", message }); // will call the function of the this.on
  }

  // Emits an ERROR level log
  error(message) {
    this.emit("log", { level: "ERROR", message });
  }
}
//Exports the Logger class so it can be used in other files
module.exports = Logger;
