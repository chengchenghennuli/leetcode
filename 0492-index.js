/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let l = 0;
    let w = 0;
    for (let i = 1; i * i <= area; ++i){
        if (area % i ===0){
            w = area / i;
            l = i;
        }
    }
    return [w, l]
};
