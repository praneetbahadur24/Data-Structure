/**
 * Given an array elements and Q queries. For each query get the sum of even index elements in the given range
 * Example:
 * Input: arr[] = {-3, 6, 2, 4, 5, 2, 8, -9, 2, 1}
 * Query1: left = 0, right = 5
 * Output: 4
 * Explanation: Even index elements between index 0 to 5 are (-3,2,5) and their sum is 4
 * solution:
 * 1. Create a prefix sum array for even index elements
 * 2. For each query, calculate the sum using the prefix sum array
 *   - If left is 0, sum is PFE[right]
 *   - Else sum is PFE[right] - PFE[left-1]
 *
 */

const getEvenIndexSum = (left, right) => {
  let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 2, 1];
  let PFE = Array(arr.length).fill(0);
  PFE[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      PFE[i] = PFE[i - 1] + arr[i];
    } else {
      PFE[i] = PFE[i - 1];
    }
  }

  if (left === 0) {
    return PFE[right];
  } else {
    return PFE[right] - PFE[left - 1];
  }
};

// -3 + 2 + 5

console.log(getEvenIndexSum(0, 5)); // sum of even indices between 0 and 5
console.log(getEvenIndexSum(2, 7)); // sum of even indices between 2 and 7
//console.log(getEvenIndexSum(3, 9)); // sum of even indices between 3 and 9
