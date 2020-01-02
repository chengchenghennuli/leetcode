/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
        const ms = {}
        const mt = {}
        for (let i = 0; i < s.length; i++){
            const s1 = s[i]
            const t1 = t[i]
            if (ms[s1] !==mt[t1]){
                return false;
            }
            ms[s1]=mt[t1]=i;
        }
        return true;
};
