/**
 * Given N array element count no of equilibrium index
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
