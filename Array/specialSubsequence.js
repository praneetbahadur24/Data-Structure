/**
 * You have given a string A having Uppercase English letters.
 * You have to find how many times subsequence "AG" is there in the given string.
 * NOTE: Return the answer modulo 109 + 7 as the answer can be very large
 * Example:
 * Input: A = "ABCGAG"
 * Output: 3
 * Explanation: Subsequences are "AG" (1st and 4th letter), "AG" (1st and 6th letter), "AG" (5th and 6th letter)
 * Solution:
 * 1. Initialize two counters, one for counting 'A's and another for counting the subsequences.
 * 2. Traverse through the string character by character.
 * 3. Each time you encounter an 'A', increment the 'A' counter.
 * 4. Each time you encounter a 'G', add the current count of 'A's to the subsequence counter.
 * 5. Return the subsequence counter as the result.
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
