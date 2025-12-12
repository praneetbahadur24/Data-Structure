/**
 * Given an integer array A of size N and an integer B, you have to print the same array after rotating it B times
 * towards the right.
 * Print array A after rotating it B times towards the right.
 * Example 1 :

  N = 4, A = [1, 2, 3, 4] and B = 2.

  Rotate towards the right 2 times - [1, 2, 3, 4] => [4, 1, 2, 3] => [3, 4, 1, 2]

  Final array = [3, 4, 1, 2]
  Example 2 :

  N = 3, A = [1, 2, 2] and B = 3.

  Rotate towards the right 3 times - [1, 2, 2] => [2, 1, 2] => [2, 2, 1] => [1, 2, 2]

  Final array = [1, 2, 2]
 * Solution:
 * 1. Reverse the whole array
 * 2. Reverse first k elements
 * 3. Reverse remaining n-k elements
 */

function rotateArray(a, b) {
  const n = a.length;
  const k = b % n;
  let p1 = 0,
    p2 = n - 1;
  while (p1 < p2) {
    swap(a, p1, p2);
    p1 = p1 + 1;
    p2 = p2 - 1;
  }
  p1 = 0;
  p2 = k - 1;
  while (p1 < p2) {
    swap(a, p1, p2);
    p1 = p1 + 1;
    p2 = p2 - 1;
  }
  p1 = k;
  p2 = n - 1;
  while (p1 < p2) {
    swap(a, p1, p2);
    p1 = p1 + 1;
    p2 = p2 - 1;
  }
  return a;
}

function swap(a, p1, p2) {
  const temp = a[p1];
  a[p1] = a[p2];
  a[p2] = temp;
}

let result = rotateArray([1, 2, 3, 4], 1);
console.log(result);
