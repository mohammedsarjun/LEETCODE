/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let l = 0
    let vis=new Set()
    let max=0

    for(let r=0;r<s.length;r++){

        while(vis.has(s[r])){
            vis.delete(s[l])
            l++
        }
        vis.add(s[r])
        max=Math.max(max,r-l+1)
    }
    return max
};