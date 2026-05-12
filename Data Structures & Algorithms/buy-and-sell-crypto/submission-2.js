class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
            r = 1;

        let maxP = 0;

        while (r < prices.length) {
            // if we find a lower buy point, that is going to be a lower cost.
            if(prices[r] > prices[l]) {
                maxP = Math.max(maxP, prices[r] - prices[l])
            } else {
                l=r;
            }
            r++
        }
        return maxP
    }
}
