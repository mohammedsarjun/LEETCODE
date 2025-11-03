/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maximumPriceSoFar=0
    let minimumPriceSoFar=Infinity
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minimumPriceSoFar){
            minimumPriceSoFar=prices[i]
        }else{

            if((prices[i]-minimumPriceSoFar) > maximumPriceSoFar){
                maximumPriceSoFar=(prices[i]-minimumPriceSoFar)
            }
        }
    }

    return  maximumPriceSoFar

};