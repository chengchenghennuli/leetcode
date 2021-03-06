/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
      let l = digits.length;
  let prev = 1;
  const result = Array(l);
  while (l--) {
    const sum = digits[l] + prev;
    result[l] = sum % 10;
    prev = (sum / 10) | 0;
  }
  if (prev) {
    result.unshift(prev);
  }
  return result;
};
