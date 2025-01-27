var thirdMax = function(nums) {
    let newSet= new Set(nums)
    let newArr=[...newSet]
    newArr.sort((a,b)=>b-a)
    if(newArr.length<3){
        return newArr[0]
    }
    return newArr[2]
};
