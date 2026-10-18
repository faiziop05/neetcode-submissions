class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyRate = prices[0];
        let maxprofit = 0;

        for (let i = 1; i < prices.length; i++) {
            buyRate = Math.min(prices[i], buyRate);
            let sell = prices[i] - buyRate;
            if (buyRate != prices[i]) {
                maxprofit = Math.max(sell, maxprofit);
            }
        }

        return maxprofit;
    }
}
