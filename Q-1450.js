
var busyStudent = function(startTime, endTime, queryTime) {
    let st;
    let et;
    let result=0;
    for(let i=0;i<startTime.length;i++){
        st=startTime[i]
        et=endTime[i]
        for(let j=st;j<=et;j++){
            if(j==queryTime){
                result=result+1
            }
        }
    }
    return result
    }