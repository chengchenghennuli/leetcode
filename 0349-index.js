/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set = new Set(nums1);
  const result = new Set();
  for (const n of nums2) {
    if (set.has(n)) {
      result.add(n);
    }
  }
  return Array.from(result);
};
