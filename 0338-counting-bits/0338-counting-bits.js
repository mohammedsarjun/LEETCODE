/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let ans = []



    for (let i = 0; i <= n; i++) {

        let j=i
        let tempArr=[]
        if(i==0) tempArr.push(0)
        while (j >0) {
            tempArr.push(j % 2)
            j = Math.floor(j / 2)
        }
        ans.push(tempArr)

    }

    let lastAns=ans.map((binary)=>binary.filter((bin)=>bin==1).length)

    return lastAns
};