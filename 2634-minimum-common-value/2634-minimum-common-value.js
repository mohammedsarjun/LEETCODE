/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let setNum1=new Set([...nums2])
    for(num of nums1){
       if(setNum1.has(num)) return num
    }

    return -1
}