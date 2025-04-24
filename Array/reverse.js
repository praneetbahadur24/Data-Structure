/**
 * You are given a constant array A.

You are required to return another array which is the reversed form of the input array.
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
