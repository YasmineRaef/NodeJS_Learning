//Create a script that uses chalk to colorize console output.

const chalk = require("chalk");

console.log(chalk.green("Success!"));
console.log(chalk.red.bold("Error!"));
console.log(chalk.yellow.underline("Warning!"));
console.log(chalk.blue.bgWhite("Info message with background"));
