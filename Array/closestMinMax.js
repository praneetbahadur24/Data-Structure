/**
 * Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum
 * value of the array and at least one occurrence of the minimum value of the array.
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
