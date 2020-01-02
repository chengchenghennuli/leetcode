/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    /*return s.split('').filter(c => c).length;*/
      return s.split(' ').filter(c => c).length;
};
