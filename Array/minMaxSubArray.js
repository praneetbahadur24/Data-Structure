/**
 * Find the length of the smallest subarray that contains both the minimum
 * and maximum elements of the original array.
 * Example:
 * Input: [1, 2, 3, 1, 3, 4, 64, 6, 3]
 * Output: 5
 * Explanation: The minimum element is 1 and maximum element is 64. The smallest subarray which contains both is [1, 3, 4, 64, 6]
 * Solution:
 * 1. Find the minimum and maximum values in the array.
 * 2. Initialize two pointers to keep track of the latest indices of the minimum and maximum values.
 * 3. Iterate through the array from the end to the beginning and update the pointers whenever you encounter the minimum or maximum values.
 * 4. Calculate the distance between the two pointers and update the answer if it's smaller than the previous answer.
 * 5. Return the size of the smallest subarray found.
 */

function minMaxSubArray() {
  const arr = [1, 2, 3, 1, 3, 4, 64, 6, 3];
  let min = arr[0];
  let max = arr[0];
  let oldLen = arr.length;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  let min_i = -1;
  let max_i = -1;
  let len = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == max) {
      if (min_i !== -1) {
        len = min_i - i + 1;
      }
      max_i = i;
    }

    if (arr[i] == min) {
      if (max_i !== -1) {
        len = max_i - i + 1;
      }
      min_i = i;
    }

    if (oldLen > len && len !== 0) {
      oldLen = len;
    }
  }
  console.log("oldLen", oldLen);
}

minMaxSubArray();
