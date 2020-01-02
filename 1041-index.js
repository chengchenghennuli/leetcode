/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let cur = 0;
    const map = {x: [0, 1, 0, -1], y: [1, 0, -1, 0]}
    for(const c of instructions){
        switch(c){
            case 'G':
                x+= map.x[cur]
                y+= map.y[cur]
                break;
            case "L":
                cur = (cur + 1) % 4
                break;
            case 'R':
                cur = (cur + 3) % 4
                break;
        }
    }
    return (x == 0 && y == 0 || cur > 0)
};
