/**
 * Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these
 * indices makes the sum of even-indexed and odd-indexed array elements equal.
 * Example:
 * Input: arr[] = {2, 1, 6, 4}
 * Output: 1
 * Explanation: If we remove index 1 (element 1), the array becomes {2, 6, 4}.
 * Now, sum of even-indexed elements = 2 + 4 = 6
 * and sum of odd-indexed elements = 6
 * Hence, there is only one special index.
 * Solution:
 * 1. Create two prefix sum arrays, one for even indices and another for odd indices.
 * 2. Iterate through each index of the array and calculate the sum of even and odd indexed elements if the current index is removed.
 * 3. Compare the sums and count how many times they are equal.
 */

const specialIndex = () => {
  let arr = [2, 1, 6, 4];
  let PFE = Array(arr.length).fill(0);
  let PFO = Array(arr.length).fill(0);
  const n = arr.length;
  PFE[0] = arr[0];
  PFO[0] = 0;
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      PFE[i] = PFE[i - 1] + arr[i];
    } else {
      PFE[i] = PFE[i - 1];
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 !== 0) {
      PFO[i] = PFO[i - 1] + arr[i];
    } else {
      PFO[i] = PFO[i - 1];
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    let evenSum = (i > 0 ? PFE[i - 1] : 0) + (PFO[n - 1] - PFO[i]);
    let oddSum = (i > 0 ? PFO[i - 1] : 0) + (PFE[n - 1] - PFE[i]);

    if (evenSum === oddSum) {
      count++;
    }
  }
  return count;
};

const result = specialIndex();
console.log("result", result);
