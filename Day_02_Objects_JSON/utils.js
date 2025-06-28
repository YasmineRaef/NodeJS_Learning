import { isEven } from "./modules.js";

try {
  console.log(isEven(4)); // true
  console.log(isEven("four")); // throws error
  console.log(isEven(5)); // false
} catch (error) {
  console.error("Caught the following Error: ", error.message);
} finally {
  console.log("Execution completed.");
}

/*
    Exact Output:
        true
        Caught the following Error:  Input must be a number
        Execution completed.
*/
