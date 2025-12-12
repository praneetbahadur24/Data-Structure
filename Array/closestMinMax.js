/**
 * Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum
 * value of the array and at least one occurrence of the minimum value of the array.
 * Example:
 * Input: A = [2, 6, 1, 6, 9]
 * Output: 3
 * Explanation: The minimum value is 1 and maximum value is 9. The smallest subarray which contains both is [1, 6, 9]
 * Solution:
 * 1. Find the minimum and maximum values in the array.
 * 2. Initialize two pointers to keep track of the latest indices of the minimum and maximum values.
 * 3. Iterate through the array and update the pointers whenever you encounter the minimum or maximum values.
 * 4. Calculate the distance between the two pointers and update the answer if it's smaller than the previous answer.
 * 5. Return the size of the smallest subarray found.
 */

const minMax = (A) => {
  let ans = A.length;
  let min = Math.min(...A);
  let max = Math.max(...A);
  let maxIndex = -1e9,
    minIndex = -1e9 / 2;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === min) {
      minIndex = i;
    }
    if (A[i] === max) {
      maxIndex = i;
    }
    ans = Math.min(ans, Math.abs(minIndex - maxIndex) + 1);
  }
  return ans;
};

const result = minMax([2, 6, 1, 6, 9]);
console.log("result", result);
