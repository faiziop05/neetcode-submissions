class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit=0
        let low =Infinity

        for(let index in prices){
            if(prices[index]<low){
                low=prices[index]
            }else{
                let newProfit=prices[index]-low
                if(newProfit>profit){
                    profit=newProfit
                }
            }
        }

        return profit
    }
}
