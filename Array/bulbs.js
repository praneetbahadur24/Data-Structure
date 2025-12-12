/**
 *
 * There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb.
 * On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on).
 * For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.
 * Find how many bulbs are on after n rounds.
 * Example:
 * Input: n = [0, 1, 0, 1]  // 0 - off, 1 - on
 * Output: 4
 * Explanation:
 * After first round: [1, 1, 1, 1]  // turn on all bulbs
 * After second round: [1, 0, 1, 0] // turn off every second bulb
 * After third round: [1, 0, 0, 0]  // toggle every third bulb
 * After fourth round: [1, 0, 0, 1] // toggle every fourth bulb
 * There are two bulbs are on.
 * Solution:
 * 1. Initialize a state variable to track the current state of the bulb (on/off).
 * 2. Iterate through the array and for each bulb, check if its state matches the expected state.
 * 3. If it matches, increment the count and toggle the state for the next bulb.
 * 4. Return the count of bulbs that are on.
 */

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
