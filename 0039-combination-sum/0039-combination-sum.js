/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
let result=[]
    function backTrack(start,path,total){

        if(target==total) {
            result.push([...path])
            return
            
            }

            if(target<total) return


            for(let i=start;i<candidates.length;i++){
                path.push(candidates[i])
                backTrack(i,path,total+candidates[i])
                path.pop()
            }

    }

    backTrack(0,[],0)
    return result
};