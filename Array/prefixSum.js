/**
 * Prifix Sum problem.
 * Formula to get cumulative Info:-  PF[i] = PF[i-1] + arr[i]
 * Given n array elements and Q range queries on same array, For each query calculate sum of all elements in the given range
 *  Example:
 * Input: arr[] = {-3, 6, 2, 4, 5, 2, 8, -9, 2, 1}
 * Query1: left = 0, right = 2
 * Output: 5
 * Explanation: Sum of elements between index 0 to 2 is -3 + 6 + 2 = 5
 * Query2: left = 1, right = 4
 * Output: 17
 * Explanation: Sum of elements between index 1 to 4 is 6 + 2 + 4 + 5 = 17
 * solution:
 * 1. Create a prefix sum array PF where PF[i] = PF[i-1] + arr[i]
 * 2. For each query, calculate the sum using the prefix sum array
 *   - If left is 0, sum is PF[right]
 *   - Else sum is PF[right] - PF[left-1]
 */

const prefixSum = (q, range) => {
  let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 2, 1];
  let PF = Array();
  PF[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    PF[i] = PF[i - 1] + arr[i];
  }

  for (let j = 0; j < q; j++) {
    if (range[j].left === 0) {
      console.log(PF[range[j].right]);
    } else {
      console.log(PF[range[j].right] - PF[range[j].left - 1]);
    }
  }
};

let result = prefixSum(3, [
  { left: 0, right: 2 }, // sum of elements from index 0 to 2
  { left: 1, right: 4 }, // sum from index 1 to 4
  { left: 2, right: 3 },
]);
