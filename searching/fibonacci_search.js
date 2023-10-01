/**
 * Return index of x element if found, otherwise, return -1
 * Without using / operator
 */

function fibSearch(arr, target) {
  // Initialize Fibonacci numbers
  let fib1 = 0,
    fib2 = 1;
  let fibCurr = fib1 + fib2;

  // Find the smallest Fibonacci number greater than or equal to n
  while (fibCurr < arr.length) {
    fib2 = fib1;
    fib1 = fibCurr;
    fibCurr = fib2 + fib1;
  }

  // Initialize variables for the current and previous split points
  let offSet = -1;

  while (fibCurr > 1) {
    let i = Math.min(offSet + fib2, arr.length - 1);
    // If x is greater than the value at index i,
    // move the split point to the right
    if (arr[i] < target) {
      fibCurr = fib1;
      fib1 = fib2;
      fib2 = fibCurr - fib1;
      offSet = i;
    } // If x is less than the value at index i,
    // move the split point to the left
    else if (arr[i] > target) {
      fibCurr = fib2;
      fib1 = fib1 - fib2;
      fib2 = fibCurr - fib1;
    } // If x is equal to the value at index i, return the index
    else return i;
  } // If x is not found in the array, return -1
  if (fib1 && arr[arr.length - 1] === target) return arr.length - 1;
  return -1;
}

/**
 * Tests
 */
let arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100, 235];
let target = 235;
console.log(fibSearch(arr, 0));
