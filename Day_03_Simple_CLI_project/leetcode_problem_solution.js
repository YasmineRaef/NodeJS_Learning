// Problem 2619: Array Prototype Last
//link:  https://leetcode.com/problems/array-prototype-last/
//Answer:

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    let size = this.length;
    return this[size - 1];
  }
};
//---------------------------------------------------------------

//Problem 2620: Counter
// Link: https://leetcode.com/problems/counter/
//Answer:

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
//---------------------------------------------------------------
//Poblem 2621: Sleep
//Link: https://leetcode.com/problems/sleep/
//Answer:

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, millis)
  );
}
//---------------------------------------------------------------
//Problem 2626: Array Reduce Transformation
//Link: https://leetcode.com/problems/array-reduce-transformation/
//Answer:

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

// ----- another solution: -------

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  } else {
    let i = 0;
    let val = fn(init, nums[i]);
    i++;
    while (i < nums.length) {
      val = fn(val, nums[i]);
      i++;
    }
    return val;
  }
};

//---------------------------------------------------------------
//Problem 2629: Function Composition
//Link: https://leetcode.com/problems/function-composition/
//Answer:

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    } else {
      for (let i = functions.length - 1; i > -1; i--) {
        x = functions[i](x);
      }
      return x;
    }
  };
};
//---------------------------------------------------------------
