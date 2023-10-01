/**
 * Given an array of numbers, find the maximum sum of any contiguous subarray of the original array.
 *
 * Ex: [34, -50, 42, 14, -5, 86]
 * Output: 137 since we should take elements 42, 14, -5 and 86
 */

const calculateSum = (numbers, left, right) => {
  if (numbers.length === 0) return 0;

  let current = left;
  let result = 0;
  while (current >= left && current <= right) {
    result += numbers[current];
    current++;
  }

  return result;
};

const bruteForceMethod = (numbers) => {
  if (numbers.length === 0) return 0;

  let currentMax = Number.MIN_VALUE;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      currentMax = Math.max(currentMax, calculateSum(numbers, i, j));
    }
  }

  return currentMax;
};

// Solution 2: Kadane's algorithm
// As we traverse the original array, we keep track of the maximum subarray we've seen
// Whenever we find a larger subarray ending at a given index, we update this variable

const findMaximumSubarrayAtGivenIndex = (numbers) => {
  if (numbers.length === 0) return 0;
  let globalMaximumSubarray = 0,
    currentMaximumSubarray = 0;

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

console.log(
  'Solution 2 - Kadane algorithm to find current and global maximum: ',
  findMaximumSubarrayAtGivenIndex([34, -50, 42, 14, -5, 86])
);
