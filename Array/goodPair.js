/**
 * Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
 * Check if any good pair exist or not.
 * Output Format :- Return 1 if good pair exist otherwise return 0.
 *
 * A = [1,2,3,4]
 *  B = 7
 * Output = 1
 * Explanation: (3,4) or (4,3) are the good pairs as A[2] + A[3] = 7
 * Solution:
 * 1. Iterate through each element of the array using two nested loops.
 * 2. For each pair of elements (A[i], A[j]), check if their sum equals B and i is not equal to j.
 * 3. If such a pair is found, return true.
 * 4. If no such pair is found after checking all pairs, return false.
 *
 *
 *
 */

function checkSum(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}
let result = checkSum([1, 2, 3, 4], 8);
console.log(result);
