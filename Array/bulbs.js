const solution = (arr) => {
  let state = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === state) {
      ans = ans + 1;
      state = 1 - state;
    }
  }
  return ans;
};

const result = solution([0, 1, 0, 1]);
console.log("result", result);
