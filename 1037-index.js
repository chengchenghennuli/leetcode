/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [a, b, c] = points;
    const [ax, ay] = a;
    const [bx, by] = b;
    const [cx, cy] = c;
    return (by - ay) * (cx - bx) !== (bx - ax) * (cy - by)
};
