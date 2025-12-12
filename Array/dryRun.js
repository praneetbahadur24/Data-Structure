function prefixSum() {
  /** * Prifix Sum problem.
   * Formula to get cumulative Info:-  PF[i] = PF[i-1] + arr[i]
   */
  let PF = Array();
  let arr = [-3, 2, 4, -1]; //[3,3,5,9,14,16,24,15,17,18]
  PF[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    PF[i] = PF[i - 1] + arr[i];
  }
  let leftSum = 0;
  let count = 0;
  for (let j = 0; j < PF.length; j++) {
    if (j > 0) {
      leftSum = PF[j - 1];
    }
    let rightSum = PF[PF.length - 1] - PF[j];
    console.log("Left Sum", leftSum, "Right Sum", rightSum);
    if (leftSum === rightSum) {
      count += 1;
    }
  }

  console.log("Prefix Sum Array", count);
}

prefixSum();
