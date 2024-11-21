var runningSum = function(nums) {
    let newArr=[];
    nums.reduce((acc,curr,index)=>{
    if(index==0){
        newArr[index]= acc + curr;
    }
    else{
        newArr[index]=newArr[index-1]+curr
    }

    },0)
    return newArr
};

console.log(runningSum([1,2,3,4,5]))