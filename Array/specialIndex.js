/**
 * Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these
 * indices makes the sum of even-indexed and odd-indexed array elements equal.
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
