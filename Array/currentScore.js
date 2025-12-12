/**
 * Given indian team score for first 10 overs of batting after every over current score is given, total run scored in last over
 *  Example:
 * Input: scores[] = {2, 8, 14, 29, 31, 49, 65, 79, 88, 97}
 * Output:
 * Query 1: left = 10, right = 10
 * Output: 9
 * Explanation: Runs scored in last over is 9  (97 - 88)
 * Query 2: left = 4, right = 10
 * Output: 68
 * Explanation: Runs scored in last 7 overs is 68 (97 - 29)
 * Query 3: left = 4, right = 7
 * Output: 36
 * Explanation: Runs scored between 4 to 7 overs is 36 (65 - 29)
 * solution:
 * 1. For each query, calculate the sum using the prefix sum array
 *   - If left is 1, sum is scores[right-1]
 *   - Else sum is scores[right-1] - scores[left-2]
 *
 */

const scores = [2, 8, 14, 29, 31, 49, 65, 79, 88, 97];

function getRunsBetweenOvers(l, r) {
  if (l === 1) {
    return scores[r - 1];
  } else {
    return scores[r - 1] - scores[l - 2];
  }
}

// Example queries
console.log("Runs in last over (9 to 10):", getRunsBetweenOvers(10, 10));
console.log("Runs in last 7 overs (4 to 10):", getRunsBetweenOvers(4, 10));
console.log("Runs between 3 to 7 overs (4 to 7):", getRunsBetweenOvers(4, 7));
