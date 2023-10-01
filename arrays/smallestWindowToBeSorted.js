/**
 * Given an array of integers that are out of order, determine the bounds of the smallest
 * window that must be sorted in order for the entire array to be sorted.
 *
 * Ex: [3, 7, 5, 6, 9]
 * Output: [1, 3] as 7, 5, 6 needs to be sorted in order for the array sorted.
 */

// Solution 1: sort the original array and checking where are the first and last altered elements
const sortAndFindAlteredElements = (numbers) => {
  const sortedNumbers = [...numbers].sort();
  let left = null,
    right = null;

  for (let i = 0; i < numbers.length; i++) {
    if (sortedNumbers[i] !== numbers[i] && left === null) {
      left = i;
    } else if (sortedNumbers[i] !== numbers[i]) {
      right = i;
    }
  }

  return [left, right];
};

console.log(
  'Solution 1 - sort and find first and last altered elements: ',
  sortAndFindAlteredElements([3, 7, 5, 6, 9])
);

/**
 * Often when dealing with arrays, a more efficient algorithm can be found by looping through elements
 * and computing a running minimum, maximum, or count.
 */

// Solution 2:
const findMinAndMaxElements = (numbers) => {
  let left = null,
    right = null;
  let currentMax = Number.MIN_VALUE,
    currentMin = Number.MAX_VALUE;

  for (let i = 0; i < numbers.length; i++) {
    currentMax = Math.max(currentMax, numbers[i]);
    if (currentMax > numbers[i]) {
      right = i;
    }
  }

  for (let i = numbers.length - 1; i >= 0; i--) {
    currentMin = Math.min(currentMin, numbers[i]);
    if (numbers[i] > currentMin) {
      left = i;
    }
  }

  return [left, right];
};

console.log(
  'Solution 2 - Find max and min of altered elements: ',
  findMinAndMaxElements([3, 7, 5, 6, 9])
);
