/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let pattern=/^[A-Z a-z]+$/
    s=s.split('')
    let left=0
    let right=s.length-1
console.log(left,right)
    while(left<=right){
        // console.log(pattern.test(s[left]),pattern.test(s[right]),s[right])
        if(pattern.test(s[left])&&pattern.test(s[right])){
            console.log("d")
            let temp=s[left]
            s[left]=s[right]
            s[right]=temp
        left++
        right--
        continue
        }
        if(!pattern.test(s[right])){
            right--
        }

        if(!pattern.test(s[left])){
            left++
        }
    }
    return s.join('')
};