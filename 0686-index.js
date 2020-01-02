/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  var str = A;
  var count = 1;
  while (!str.includes(B)) {
    if (str.length - A.length > B.length) {
      return -1;
    }
    count++;
    str += A;
  }
  return count;
};
