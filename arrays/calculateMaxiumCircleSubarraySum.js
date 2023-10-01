/**
 * Finding the maximum sum of contiguous subarray which elements can wrap around.
 * This can be concerned as a follow-up question of calculate maximum subarray sum
 *
 * Ex: given [8, -1, 3, 4]
 * Output: 15 as we choose numbers 3, 4, and 8 where 8 is obtained from wrapping around
 *
 * We can split the problem into two parts:
 * The first part is similar to finding the maximum subarray sum that doesn't wrap around.
 * The second part is computing the maximum subarray does wrap around and find the maximum of the two.
 */

const calculateSumOfArray = (numbers, left, right) => {
  if (numbers.length === 0) return 0;

  let current = left;
  let result = 0;
  while (current >= left && current <= right) {
    result += numbers[current];
    current++;
  }

  return result;
};

const calculateMaximumSubarray = (numbers) => {
  if (numbers.length === 0) return 0;
  let globalMaximumSubarray = Number.MIN_VALUE,
    currentMaximumSubarray = Number.MIN_VALUE;

  for (let i = 0; i < numbers.length; i++) {
    currentMaximumSubarray = Math.max(
      numbers[i],
      currentMaximumSubarray + numbers[i]
    );
    globalMaximumSubarray = Math.max(
      globalMaximumSubarray,
      currentMaximumSubarray
    );
  }

  return globalMaximumSubarray;
};

const calculateMinimumSubarray = (numbers) => {
  if (numbers.length === 0) return 0;
  let globalMinimum = Number.MAX_VALUE,
    currentMinimum = Number.MAX_VALUE;

  for (let i = 0; i < numbers.length; i++) {
    currentMinimum = Math.min(numbers[i], currentMinimum + numbers[i]);
    globalMinimum = Math.min(globalMinimum, currentMinimum);
  }

  return globalMinimum;
};

const calculateMaximumCircularSubarray = (numbers) => {
  let maximumSubarrayWrapAround =
    calculateSumOfArray(numbers, 0, numbers.length - 1) -
    calculateMinimumSubarray(numbers);
  return Math.max(calculateMaximumSubarray(numbers), maximumSubarrayWrapAround);
};

console.log(
  'Maximum subarray wrap around: ',
  calculateMaximumCircularSubarray([8, -1, 3, 4])
);
