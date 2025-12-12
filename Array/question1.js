/**
 * Given N array elements, count number of elements having at least one element greater than itself.
 *  Example:
 * Input: arr[] = {2, 4, 9, 5, 24, 12, 8, 10}
 * Output: 7
 * Explanation: All elements except 24 have at least one element greater than itself.
 * Solution:
 * 1. Find the maximum element in the array.
 * 2. Count how many times the maximum element occurs.
 * 3. Subtract the count of maximum elements from the total number of elements to get the result.
 */

function countElementsWithGreater(arr) {
  if (arr.length === 0) return 0;

  let counter = 0;
  let newMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > newMax) {
      newMax = arr[i];
      counter = 1; // reset counter as we found a new max
    } else if (arr[i] === newMax) {
      counter += 1; // increment counter for duplicates of the current max
    }
  }

  return arr.length - counter; // total elements minus those equal to max
}

let result = countElementsWithGreater([2, 4, 9, 5, 24, 12, 8, 10]);
console.log("result", result);
