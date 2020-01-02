/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res = [];
    for (var i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) res.push(i);
    }
    return res;
};

function isSelfDividingNumber(n) {
    var t = n;
    if (!t) return false;
    while (t) {
        var r = t % 10;
        t = Math.floor(t / 10);
        if (!r) return false;
        if (n % r) return false;
    }
    return true;
console.log(selfDividingNumbers(1, 22));
};
