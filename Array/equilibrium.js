/**
 * Given N array element count no of equilibrium index
 * An equilibrium index is an index such that the sum of elements at lower indexes is equal to the sum of elements
 * at higher indexes.
 *
 * sum of left side(o, i-1) = sum of right side(i+1, n-1)
 *
 * Using Prefix Sum Array
 * PF[i-1] = PF[n-1] - PF[i]
 * Note :- if i = 0 then left sum is 0 and if i = n-1 then right sum is 0
 */

const equilibriumIndex = () => {
  //let arr = [-7, 1, 5, 2, -4, 3, 0];
  let arr = [1, 2, 3];
  let PF = Array();
  let c = 0;
  PF[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    PF[i] = PF[i - 1] + arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    let left = 0;
    if (j > 0) {
      left = PF[j - 1];
    }
    let right = PF[arr.length - 1] - PF[j];
    if (left === right) {
      c = c + 1;
      //return j;
    }
  }
  return c;
};

const result = equilibriumIndex();
console.log("Result", result);
