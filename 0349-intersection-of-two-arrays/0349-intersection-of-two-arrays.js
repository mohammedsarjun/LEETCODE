/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
let result

    for(let i=0;i<nums1.length;i++){
        let found=false
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                found=true
            }
    
        }
        if(!found){
            
            console.log(nums1[i],found)
            nums1.splice(i,1)
            i--
        }
    }

    let mySet=new Set(nums1)
    mySet=[...mySet]
    return mySet
};