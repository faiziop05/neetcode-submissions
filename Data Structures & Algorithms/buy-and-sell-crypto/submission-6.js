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
            maxprofit = Math.max(prices[i] - buyRate, maxprofit);
        }

        return maxprofit;
    }
}
