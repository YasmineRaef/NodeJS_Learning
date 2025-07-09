// app.js
//Loads the OS module to get system-level info like memory usage
const os = require("os");

const path = require("path");
const fs = require("fs");
const Logger = require("./logger.cjs");

// To Ensure the logs directory exists
//path.join() builds a safe path to the logs folder
//If the folder doesn’t exist, we create it using fs.mkdirSync()
const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

//To build the full path to the log file.
// Define the log file path
const logFile = path.join(logDir, "eventlog.txt");

// Create a logger instance
const logger = new Logger(logFile);

//To call the info() method, in order to emit a 'log' event
//P.S The logger writes these messages to both the file and the console
// Log startup messages
logger.info("Application started");
logger.info("Application processing");

//Every 3 seconds, this block runs.
// It calculates the percentage of free memory.
// Periodically log memory usage
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  if (memoryUsage < 80) {
    logger.info(`Memory usage is at ${memoryUsage.toFixed(2)}%`);
  } else {
    logger.error(`High memory usage detected: ${memoryUsage.toFixed(2)}%`);
  }
}, 3000);

//If memory usage is under 80%, it logs an INFO message.
//If it’s 80% or higher, it logs an ERROR message
//toFixed(2) limits the number to 2 decimal places

/*
Out:
    2025-07-08T23:53:48.222Z - INFO: Application started
    2025-07-08T23:53:48.233Z - INFO: Application processing
    2025-07-08T23:53:51.247Z - INFO: Memory usage is at 30.51%
    2025-07-08T23:53:54.252Z - INFO: Memory usage is at 30.63%
    2025-07-08T23:53:57.254Z - INFO: Memory usage is at 30.66%
    2025-07-08T23:54:00.258Z - INFO: Memory usage is at 30.90%
    2025-07-08T23:54:03.262Z - INFO: Memory usage is at 30.89%
    2025-07-08T23:54:06.267Z - INFO: Memory usage is at 30.91%
    2025-07-08T23:54:09.270Z - INFO: Memory usage is at 30.91%
    2025-07-08T23:54:12.284Z - INFO: Memory usage is at 30.92%
*/
