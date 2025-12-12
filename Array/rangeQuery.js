/**
 *
 * You are given an integer array A of length N.
 * You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
 * For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
 * More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.
 * Example:
 * Input: A = [1, 2, 3, 4, 5]
 *       B = [[0, 3], [1, 2]]
 * Output: [10, 5]
 * Explanation:
 * For the first query, sum of elements from index 0 to 3 is 1 + 2 + 3 + 4 = 10.
 * For the second query, sum of elements from index 1 to 2 is 2 + 3 = 5.
 * Solution:
 * 1. Create a prefix sum array PE where PE[i] = A[0] + A[1] + ... + A[i]
 * 2. For each query [L, R], calculate the sum as:
 *  - If L is 0, sum is PE[R]
 * - Else sum is PE[R] - PE[L - 1]
 *
 */

const rangeQuery = (A, Q) => {
  let PE = Array(A.length);
  let ans = Array();
  PE[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    PE[i] = PE[i - 1] + A[i];
  }

  for (let j = 0; j < Q.length; j++) {
    const left = Q[j][0];
    const right = Q[j][1];
    if (left === 0) {
      ans.push(PE[right]);
    } else {
      ans.push(PE[right] - PE[left - 1]);
    }
  }
  return ans;
};

let result = rangeQuery(
  [1, 2, 3, 4, 5],
  [
    [0, 3],
    [1, 2],
  ]
);

console.log("result", result);
