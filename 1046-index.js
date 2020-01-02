/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1){
    stones.sort((n1, n2) => n1 - n2)
    const s1 = stones.pop()
    const s2 = stones.pop()
    if (s1 == s2){
        continue
    }
    stones.push(s1 - s2)
    }
    return stones[0] || 0
};
