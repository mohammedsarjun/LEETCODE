/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimumPriceSoFar=Infinity
    let maximumProfitSoFar=-Infinity
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minimumPriceSoFar){
            minimumPriceSoFar=prices[i]
        }else{
            if((prices[i]-minimumPriceSoFar)>maximumProfitSoFar){
                maximumProfitSoFar=prices[i]-minimumPriceSoFar
            }
        }
    }
    if(maximumProfitSoFar==-Infinity){
        return 0
    }
    return maximumProfitSoFar
};