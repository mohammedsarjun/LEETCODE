/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let arr=[0,0]

    for(let i=0;i<moves.length;i++){
        if(moves[i]=="U"){
            arr[0]++
        }else if(moves[i]=="D"){
            arr[0]--
        }else if(moves[i]=="L"){
            arr[1]++
        }else if(moves[i]=="R"){
            arr[1]--
        }
    }

    return arr[0]==0&&arr[1]==0?true:false
};