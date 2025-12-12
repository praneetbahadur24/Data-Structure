/**
 *
 *
 * Formula:-
 *      To find total subArray count (n * n + 1)/2
 *      To find
 */

const subArraySum = (arr) => {
  const n = arr.length;
  let sum = BigInt(0);
  for (let i = 0; i < n; i++) {
    let x = (i + 1) * (n - i);
    sum += BigInt(x) * BigInt(arr[i]);
  }
  return sum;
};

const result = subArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("result", result);
