/**
 * Given n array elements and Q range queries on same array, For each query calculate sum of all elements in the given range
 *
 */

const sumArray = (q, query) => {
  let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
  for (let i = 0; i < q; i++) {
    let sum = 0;
    for (let j = query[i].left; j <= query[i].right; j++) {
      sum = sum + arr[j];
    }
    console.log("Sum", sum);
  }
};

let result = sumArray(3, [
  { left: 0, right: 2 }, // sum of elements from index 0 to 2
  { left: 1, right: 4 }, // sum from index 1 to 4
  { left: 2, right: 3 },
]);
