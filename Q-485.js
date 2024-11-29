
var findMaxConsecutiveOnes = function(nums) {
    let temp1=0;
    let temp2=0;
    let temp2active=false
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0&&i==0){
            continue;
        }
        if(nums[i]==0){
        temp2active=true
        }
        if(nums[i]==1&&temp2active==false){
            temp1=temp1+1
        }
        else if(temp2active==true&&nums[i]==1){
            temp2=temp2+1
            if(nums[i+1]==0){
                 temp1=temp1>temp2?temp1:temp2
                  temp2=0
            }
        }
    }
    temp1=temp1>temp2?temp1:temp2
                  temp2=0
    return temp1
    };