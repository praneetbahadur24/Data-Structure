/**
 * Find the number of leader elements in an array. A leader element is defined as an element that is greater than all the elements to its left.
 * Example:
 * Input: arr[] = [3, 2, 4, 5, 2, 1]
 * Output: 3
 * Explanation: The leader elements are 3, 4, and 5.
 * Solution:
 * 1. Initialize a variable to keep track of the maximum element seen so far (prefixMax) and a count variable to count leader elements.
 * 2. Iterate through the array from left to right.
 * 3. For each element, check if it is greater than prefixMax.
 *    - If it is, update prefixMax to this element and increment the count.
 * 4. After iterating through the array, return the count of leader elements.
 *
 */

function leaderElement() {
  const arr = [3, 2, 4, 5, 2, 1];
  if (arr.length === 0) return 0;
  let count = 1;
  let prefixMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > prefixMax) {
      prefixMax = arr[i];
      count = count + 1;
    }
  }
  console.log(count);
  return count;
}
