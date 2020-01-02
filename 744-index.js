/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    /*return letters.find(letter=> letter => target) || letters[0];*/
    for(let l of letters) {
        if(l > target) {
            return l
        }
    }
    return letters[0]
};
