/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let smallNum=nums.sort((a,b)=>a-b)[0]

    let largeNum=nums.sort((a,b)=>a-b)[nums.length-1]
   
    for(let i=smallNum;i>0;i--){
    
        if(smallNum%i==0&&largeNum%i==0){
                console.log(i)
            return i
        }
    }
};