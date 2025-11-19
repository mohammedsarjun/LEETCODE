/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let res=0
    let lTotal=0
    for(let i=0;i<moves.length;i++){
        if(moves[i]=="L"||moves[i]=="_"){
            res--
        }else{
            res++
        }
    }

     lTotal= Math.abs(res)
    res=0
    let rTotal=0
    for(let i=0;i<moves.length;i++){
        if(moves[i]=="R"||moves[i]=="_"){
            res++
        }else{
            res--
        }
    }

    rTotal= Math.abs(res)

    return Math.max(lTotal,rTotal)
};