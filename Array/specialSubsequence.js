/**
 * You have given a string A having Uppercase English letters.
 * You have to find how many times subsequence "AG" is there in the given string.
 * NOTE: Return the answer modulo 109 + 7 as the answer can be very large
 */

const countSubsequenceChar = (str, char) => {
  let ans = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      count = count + 1;
    } else if (str[i] === "G") {
      ans = ans + count;
    }
  }
  return ans;
};

const result = countSubsequenceChar("ABCGAG", "AG");
console.log("result", result);
