/**
 * You are given a constant array A.

You are required to return another array which is the reversed form of the input array. 
  * Example:
  * Input: A = [1, 1, 10]
  * Output: [10, 1, 1]
  * Explanation: The reversed form of the input array is [10, 1, 1].
  * Solution:
  * 1. Initialize two pointers, one at the start (p1) and one at the end (p2) of the array.
  * 2. Swap the elements at p1 and p2.
  * 3. Move p1 forward and p2 backward.
  * 4. Repeat steps 2-3 until p1 is no longer less than p2.
  * 5. Return the modified array.
 */

function reverse(arr) {
  let p1 = 0,
    p2 = arr.length - 1;
  while (p1 < p2) {
    const temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1 = p1 + 1;
    p2 = p2 - 1;
  }
  return arr;
}

let result = reverse([1, 1, 10]);
console.log(result);
