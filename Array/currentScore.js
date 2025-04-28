/**
 * Given indian team score for first 10 overs of batting after every over current score is given, total run scored in last over
 *  overs 1 2 3 4 I 5 I 8 9 10
    Score 2 8 1,4 29 3.1 49 6579 8897
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
