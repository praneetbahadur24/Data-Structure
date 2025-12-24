/**
 * Count the number of "ag" pairs in the given string.
 * Example:
 * Input: arr = "adgagagfg"
 * Output: 5
 * Explanation: The "ag" pairs are found at positions (0,2), (0,4), (0,6), (3,4), (3,6)
 * Solution:
 * 1. Initialize two counters, one for counting 'g's and another for counting the pairs.
 * 2. Traverse through the string from right to left.
 * 3. Each time you encounter a 'g', increment the 'g' counter.
 * 4. Each time you encounter an 'a', add the current count of 'g's to the pair counter.
 * 5. Return the pair counter as the result.
 */
function countPair() {
  const arr = "adgagagfg";
  console.log(arr);
  let count = 0;
  let ans = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "g") {
      count = count + 1;
    } else if (arr[i] === "a") {
      ans = ans + count;
    }
  }
  console.log("ans", ans);
}

countPair();
