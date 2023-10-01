/**
 * Given an array of integers, return a new array such that each element at index i of the
 * new array is the product of all the elements in the original array except the one at i.
 */

// Solution 1: get the product of all elements in the original array and divide the element at index i
const divisionSolution = (numbers) => {
  if (numbers.length === 0) return [];

  const product = numbers.reduce((acc, curr) => acc * curr);
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(product / numbers[i]);
  }

  return result;
};

console.log('Solution 1 - division solution: ', divisionSolution([1, 2, 3])); // [6, 3, 2]

// Solution 2: compute the prefix and suffix products for every index i
const computePrefixAndSuffixProducts = (numbers) => {
  if (numbers.length === 0) return [];

  // Compute prefix product
  let prefixProducts = [];
  for (let i = 0; i < numbers.length; i++) {
    if (prefixProducts.length) {
      prefixProducts.push(prefixProducts[i - 1] * numbers[i]);
    } else {
      prefixProducts.push(numbers[i]);
    }
  }

  // Compute suffix product
  let suffixProducts = [];
  const reversedNumbers = numbers.reverse();
  for (let i = 0; i < reversedNumbers.length; i++) {
    if (suffixProducts.length) {
      suffixProducts.push(suffixProducts[i - 1] * reversedNumbers[i]);
    } else {
      suffixProducts.push(reversedNumbers[i]);
    }
  }
  suffixProducts.reverse();

  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    switch (i) {
      case 0:
        result.push(suffixProducts[i + 1]);
        break;
      case numbers.length - 1:
        result.push(prefixProducts[i - 1]);
        break;
      default:
        result.push(suffixProducts[i + 1] * prefixProducts[i - 1]);
        break;
    }
  }

  return result;
};

console.log(
  'Solution 2 - Prefix and Suffix products calculation:',
  computePrefixAndSuffixProducts([1, 2, 3])
);
