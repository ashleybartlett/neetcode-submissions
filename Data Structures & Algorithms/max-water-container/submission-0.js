class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let j = 0,
            k = heights.length - 1;

        let largest = 0;

        while(j < k) {
            const vol = Math.min(heights[j], heights[k]) * (k - j);
            // console.log(`[${k},${j}] height: `, Math.min(heights[j], heights[k]), 'factor: ', k - j)
            largest = Math.max(largest, vol)
            if(heights[j] < heights[k]) {
                j++
            } else {
                k--
            }
        }
        return largest
    }
}
