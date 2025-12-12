/**
 * Given an array A of length N, your task is to find the maximum possible sum of any non-empty contiguous subarray.
 * In other words, among all possible subarrays of A, determine the one that yields the highest sum and return that sum.
 * Input: A = [1, 2, 3, 4, -10] OutPut: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
 * Input A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output: The subarray [4,-1,2,1] has the maximum possible sum of 6
 */

const maxSum = (arr) => {
  let currentSum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = currentSum + arr[i];
    maxSum = Math.max(maxSum, currentSum);
    currentSum = Math.max(0, currentSum);
  }
  return maxSum;
};

const result = maxSum([1, 2, 3, 4, 10]);
console.log("result", result);
