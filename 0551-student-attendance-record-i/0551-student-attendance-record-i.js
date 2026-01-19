/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let isAbsentLesserThan2Days=s.split('').filter((attendanceWord)=>attendanceWord=="A").length<2

    if(!isAbsentLesserThan2Days) return false

    let is3LateTaken=s.split('').filter((attendanceWord)=>attendanceWord=="L").length>=3

    if(!is3LateTaken) return true

    let is3ConsecutiveLateExist=is3ConsecutiveLate(s)


    if(is3ConsecutiveLateExist)return false

    return true
};

function is3ConsecutiveLate(s){


for(let i=0;i<s.length;i++){
    if(s[i]=="L"){
        let aCount=0

        for(let j=i;j<i+3;j++){
            if(s[j]=="L") aCount++
            console.log(aCount)
        }

        if(aCount>=3) return true
    }
}

return false
}