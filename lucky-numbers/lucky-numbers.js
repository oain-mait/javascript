// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const reducer = (prev, curr) => Number(String(prev) + String(curr));
  return array1.reduce(reducer) + array2.reduce(reducer);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value);
  let i =0;
  let j = str.length -1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === '' || input === undefined || input === null) return 'Required field';
  const checker = Number(input);
  if (checker) return '';
  if (Number.isNaN(checker) || checker === 0) return 'Must be a number besides 0';
  // if (!checker) return 'Required field';
}
