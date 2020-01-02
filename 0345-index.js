/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('');
  const w = 'aeiouAEIOU'.split('');
  const t = s.filter(_s => w.includes(_s));
  t.reverse();
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (w.includes(s[i])) {
      s[i] = t[j++];
    }
  }
  return s.join('');
};
