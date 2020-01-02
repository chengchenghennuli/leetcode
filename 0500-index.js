/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const info = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
].reduce((result, array, index) => {
  array.forEach(c => {
    result[c] = index;
    result[c.toUpperCase()] = index;
  });
  return result;
}, {});
    const result = [];
    first: for (let i = 0; i < words.length; i++){
        const word = words[i];
        let l = word.length;
        let index = info[word[--l]]
        while (l--){
            if (index !== info[word[l]]){
                continue first;
            }
        }
        result.push(word);
    }
    return result;
};
