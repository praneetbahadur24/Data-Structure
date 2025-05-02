/**
 *
 * You are given an integer array A of length N.
 * You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
 * For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
 * More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.
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
