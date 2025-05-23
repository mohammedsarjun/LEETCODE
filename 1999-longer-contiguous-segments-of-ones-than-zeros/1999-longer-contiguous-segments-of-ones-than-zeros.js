/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let one=0
    let zero=0
    let tempOne=0
    let tempZero=0
    for(let i=0;i<s.length;i++){
        if(s[i]==1){
             if(zero<tempZero){
                zero=tempZero
            }
            tempZero=0

            tempOne++
        }else{
            if(one<tempOne){
                one=tempOne
            }
            tempOne=0

            tempZero++
        }
    }

    if(tempOne && tempOne>one){
        one=tempOne
    }

    if(tempZero && tempZero>zero){
        zero=tempZero
    }
    console.log(one,zero)
    return one>zero
};