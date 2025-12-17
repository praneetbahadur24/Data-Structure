/**
 *
 *
 * Formula:-
 *      To find total subArray count (n * n + 1)/2
 *      To find
 *     sum of all subArrays = arr[i] * (i + 1) * (n - i)
 *
 * Example:
 * Input: arr[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output: 16
 * Explanation: Sum of all subArrays is 16
 * Solution:
 * 1. Iterate through the array
 * 2. For each element at index i, calculate its contribution to the total sum of all subarrays using the formula:
 *    contribution = arr[i] * (i + 1) * (n - i)
 *    where (i + 1) is the number of subarrays that can start before or at index i,
 *    and (n - i) is the number of subarrays that can end after or at index i.
 * 3. Accumulate the contributions to get the final sum.
 *
 */

const subArraySum = (arr) => {
  const n = arr.length;
  let sum = BigInt(0);
  for (let i = 0; i < n; i++) {
    let x = (i + 1) * (n - i);
    sum += BigInt(x) * BigInt(arr[i]);
  }
  return sum;
};

const result = subArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("result", result);
