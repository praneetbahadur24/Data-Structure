/**
 * Take input an array A of size N and write a program to print maximum and minimum elements of the input.
 * The only line of the input would contain a single integer N that represents the length of the array followed by the N
 * elements of the input array A.
 * Example:
 * Input: A = [7, 4, 9, 2, 34, 8, 12, 1, 14]
 * Output: [1, 34]
 * Explanation: The minimum element in the array is 1 and maximum is 34.
 * Solution:
 * 1. Initialize two variables, min and max, to store the minimum and maximum values.
 * 2. Iterate through each element of the
 * array:
 *    a. If the current element is less than min, update min.
 *    b. If the current element is greater than max, update max.
 *
 */
function maxMin(arr) {
  if (arr.length === 0) return false;

  let min = arr[0];
  let max = [0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return [min, max];
}

let result = maxMin([7, 4, 9, 2, 34, 8, 12, 1, 14]);
console.log(result);
