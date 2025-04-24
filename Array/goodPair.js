/**
 * Given an array A and an integer B. A pair(i, j) in the array is a good pair if i != j and (A[i] + A[j] == B).
 * Check if any good pair exist or not.
 * Output Format :- Return 1 if good pair exist otherwise return 0.
 *
 * A = [1,2,3,4]
 *  B = 7
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
