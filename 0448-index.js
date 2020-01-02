/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    /*const l = nums.length;
    const array = Array(l - 1);
    for (let i = 0; i < l; i++) {
     array[nums[i]] = true;
  }
    const result = [];
    for (let i = 1; i <= l; i++) {
      if (array[i] === undefined) {
      result.push(i);
    }
  }
  return result;*/
    
    const l = nums.length
    const hash = {}
    for ( let i =0; i < l; i++){
        hash[nums[i]] = true
    }
    const result = []
    for (let i = 1; i <= l; i++){
        if (hash[i] === undefined){
            result.push(i)
        }
    }
    return result
};
