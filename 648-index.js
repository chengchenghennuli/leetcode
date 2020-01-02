/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
     return sentence.replace(/\b\w+\b/g,(word) =>{
     return dict.find(root => word.startsWith(root)) || word; 
    })
};
