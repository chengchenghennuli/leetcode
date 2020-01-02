/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const map = new Map();
  count(A);
  count(B);
  return Array.from(map)
    .filter(([, count]) => count === 1)
    .map(([key]) => key);

  function count(str) {
    str.split(' ').forEach(word => map.set(word, map.get(word) + 1 || 1));
  }
};
