/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need={}
    let window={}
    for(let c of t){
       need[c]=(need[c]||0)+1
    }

    let left=0
    let resLen=Infinity
    let res=[-1,-1]
    let have=0
    let needCount=Object.keys(need).length

    for(let right=0;right<s.length;right++){
        let c=s[right]
        window[c]=(window[c]||0)+1
        if(need[c]!=undefined && need[c]==window[c]){
            have++
        }

        while(have==needCount){
            if(right-left+1<resLen){
                resLen=right-left+1
                res=[left,right]
            }

            let leftChar=s[left]
            window[leftChar]--

            if(need[leftChar] && window[leftChar]<need[leftChar]){
                have--
            }
            left++
        }
    }
    [left,right]= res
    return resLen==Infinity?"":s.slice(left,right+1)
};