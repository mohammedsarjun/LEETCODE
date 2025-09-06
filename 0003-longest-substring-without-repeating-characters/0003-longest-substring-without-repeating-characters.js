/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let longSubWindow=-Infinity
let right=0
let obj={}
for(let left=0;left<s.length;left++){

while(!obj[s[right]]&&right<s.length){
obj[s[right]]=1

right++

}
longSubWindow=Math.max(longSubWindow,right-left)


delete obj[s[left]]
}
return longSubWindow==-Infinity?0:longSubWindow
};