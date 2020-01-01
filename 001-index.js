/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
};

var twoSum2 = function (numbers, target) {
    var map = {};
    for (var i = 0; i < numbers.length; i++) {
        var n = numbers[i];
        if (map[target - n] !== undefined) {
            return [map[target - n], i];
        } else {
            map[n] = i;
        }
    }
};

console.log(twoSum([2, 11, 15, 7], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 26));
console.log(twoSum2([2, 7, 11, 15], 26));
