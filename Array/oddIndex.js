/**
 * Given an array elements and Q queries. For each query get the sum of Odd index elements in the given range
 */

const getEvenIndexSum = (left, right) => {
  let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 2, 1];
  let PFE = Array(arr.length).fill(0);
  PFE[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 !== 0) {
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
