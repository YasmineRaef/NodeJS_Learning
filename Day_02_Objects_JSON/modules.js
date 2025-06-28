//Create a module with a function that throws an error if input is invalid,
// then import and use it.

function isEven(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }
  return num % 2 === 0;
}

export { isEven };
