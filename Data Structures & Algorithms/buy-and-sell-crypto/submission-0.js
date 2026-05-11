class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            for(let y = i+1; y < prices.length; y++) {
                profit = Math.max(profit, prices[y] - prices[i], 0)
            }
        }
        return profit;
    }
}
