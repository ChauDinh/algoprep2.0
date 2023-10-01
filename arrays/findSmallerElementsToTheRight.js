/**
 * Given an array of integers, return a new array where each in the new array is
 * the number of smaller elements to the right of that element in the original array
 *
 * Ex: [3, 4, 9, 6, 1]
 * Output: [1, 1, 2, 1, 0]
 */

const findSmallerNumbers = (numbers, target, left, right) => {
  if (numbers.length === 0) return 0;

  let current = left;
  let result = 0;
  while (current >= left && current <= right) {
    if (numbers[current] < target) {
      result++;
    }
    current++;
  }

  return result;
};

const bruteForceMethod = (numbers) => {
  if (numbers.length === 0) return [];

  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    const smallerNumbers = findSmallerNumbers(
      numbers,
      numbers[i],
      i + 1,
      numbers.length - 1
    );
    result.push(smallerNumbers);
  }

  return result;
};

console.log(
  'Solution 1 - brute force method: ',
  bruteForceMethod([3, 4, 9, 6, 1])
);
