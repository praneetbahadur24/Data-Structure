/**
 * Prifix Sum problem.
 * Formula to get cumulative Info:-  PF[i] = PF[i-1] + arr[i]
 */

const prefixSum = (q, range) => {
  let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 2, 1];
  let PF = Array();
  PF[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    PF[i] = PF[i - 1] + arr[i];
  }

  for (let j = 0; j < q; j++) {
    if (range[j].left === 0) {
      console.log(PF[range[j].right]);
    } else {
      console.log(PF[range[j].right] - PF[range[j].left - 1]);
    }
  }
};

let result = prefixSum(3, [
  { left: 0, right: 2 }, // sum of elements from index 0 to 2
  { left: 1, right: 4 }, // sum from index 1 to 4
  { left: 2, right: 3 },
]);
